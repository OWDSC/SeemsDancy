import imp
import os
import re
from string import punctuation

import numpy as np
import pandas as pd

import spacy 
import cv2
#from skimage import io
import skimage

import datefinder
import pytesseract



### USAGE - IMPORTANT!!
# always run set_tesseract first, giving it the path to the tesseract.exe 
# then run process_URL to get all of the outpput


# tesseract engine download (Windows): https://github.com/UB-Mannheim/tesseract/wiki



####
# Set Up System
####

#language models for nlp
eng_nlp = spacy.load("en_core_web_sm")
de_nlp = spacy.load("de_core_news_sm")


def set_tesseract(path):
    pytesseract.pytesseract.tesseract_cmd = path


####
# Image Fucntions
####

def open_url(url):
    try:
        image = skimage.io.imread(url)
        return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    except:
        print("Invalide URL oder kein Zugriff auf URL möglich")


# get grayscale image
def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY )

# noise removal
def remove_noise(image):
    return cv2.medianBlur(image,5)

#dilation
def dilate(image):
    kernel = np.ones((5,5),np.uint8)
    return cv2.dilate(image, kernel, iterations = 1)

#canny edge detection
def canny(image):
    return cv2.Canny(image, 100, 200)

def torgb(image):
    return cv2.cvtColor((image), cv2.COLOR_BGR2RGB)



def image_extract(base, sol='', all=True):
    # Base = base_image, sol = Output String    
#     sol = sol +  'Base:' 
    sol = sol +  pytesseract.image_to_string(base) 

    if all:
#     sol = sol +  'Greyscale: '    
        sol = sol + pytesseract.image_to_string(get_grayscale(base))  
#     sol = sol +  'Smooth: '
        sol = sol + pytesseract.image_to_string(remove_noise(base))
#     sol = sol +  'Dilate: '
        sol = sol + pytesseract.image_to_string(dilate(base))
#     sol = sol +  'Canny Edge: ' 
        sol = sol + pytesseract.image_to_string(canny(base))
    
    #return '' instead of \n
    sol = sol.replace('\n',' ')
    return sol


####
# NLP Functions
####

def ner_output(sol, language):
 #german ner
    if language == 'ger':
        return de_nlp(sol)

    #english ner
    #language == 'eng'
    else:
        return eng_nlp(sol)


def get_keywords(text, lang="ger"):
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN'] 
    clean_text = ""
    #Determine Stopwords
    if lang == "ger":
        stop_words = de_nlp.Defaults.stop_words
    else: 
        stop_words = eng_nlp.Defaults.stop_words

    #Remove any elements that are only 1 character long
    raw_text = text.split()

    for word in raw_text:
        if len(word) > 1:
            clean_text = clean_text + word + " "
        
    text = clean_text
    
    #Tokenize
    doc = ner_output(text.lower(), lang)

    #Exclude stopwords and punctiation
    for token in doc:
        if(token.text in stop_words or token.text in punctuation):
            continue

    #Exlude tokens that aren't included in the giving pos tagging  
        if(token.pos_ in pos_tag):
            result.append(token.text)

    #Return cleaned keywords as a single string
    result = " ".join(result)
                
    return result


####
# Date Fucntions
####


# Getting dates from Raw Text
# -> Run dates_weighted on string from extract_batch


# Exclude dates from list before a certain time
def exclude_date(year_list):
    
    date_base = 2020
    date_clear = []

    for date in year_list:
        if int(date) > date_base:
            date_clear.append(date)
    
    if date_clear == []:
        return ["No Year"]
    else:
        return date_clear

#get list of dates from string
def get_dates(text):

    dates = []
    years = []

    matches = datefinder.find_dates(text)

    for match in matches:
        years.append(match.year)
        date = [match.day,match.month]
        dates.append(date)

    return years, dates

# Generate DF that has only unique values and how often they occur
# exclude: exclude years before the one given in the exclude date function (atm hardset on 2020)
# get_all: If True, return the weighted Year and Date df's rather than the string

def dates_weighted(text, exclude=True, get_all = False):
    
    year_list, date_list = get_dates(text)

    if exclude:
        year_list = exclude_date(year_list)

    date_df = pd.DataFrame(data = {'dates': date_list})

    date_df = date_df['dates'].value_counts(dropna=True, sort=True)
    date_df = date_df.rename_axis('dates').reset_index(name='weights')

    year_df = pd.DataFrame(data = {'years': year_list})
    year_df = year_df['years'].value_counts(dropna=True, sort=True)
    year_df = year_df.rename_axis('years').reset_index(name='weights')

    if get_all:
        return date_df, year_df
    else:

        l_date = date_df["dates"].iloc[0]
        l_year = year_df["years"].iloc[0]

        date_str = f"{l_date[0]}.{l_date[1]}.{l_year}"

        return date_str


####
# Web-Adress Functions
####

#Find website adresses in text, expected input = keywords

def get_web_adresses(text):

    adresses = []
    #uses re library to find string starting with www.
    adresses = re.findall('www.([\w\-\.]+)',  text)

    #Return "none" if no adresses were found
    if adresses == []:
        return "None"
    else:
        #remove duplicates
        adresses = list(set(adresses))

        #addd www. to the adresses again, re removes them while saving
        for x in range(len(adresses)):
            adresses[x] = 'www.'+adresses[x]

        return adresses    

####
# Artist Functions
####

# excepting list
def get_artist(input):
    
    token_sol = eng_nlp(input)

    entities = []
    
    for word in token_sol.ents:
        if word.label_ in ["ORG", "PERSON"]:
            if str(word.ents[0]) not in entities:
                entities.append(str(word.ents[0]))
 
    return entities




    
def process_url(url, all=True):

    url_dict = {"URL": url}
    
    url_dict["raw_text"] = image_extract(open_url(url), sol='', all=all)
    url_dict["key_words"] = get_keywords(url_dict["raw_text"])


    try:
        url_dict["likely_date"] = dates_weighted(url_dict["key_words"])
    except:
        url_dict["likely_date"] = "No Date Found"

    url_dict["websites"] = get_web_adresses(url_dict["key_words"])

    url_dict["features"] = get_artist(url_dict["key_words"].title())

    return url_dict

    
        
    