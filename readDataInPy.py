from flask import Flask, jsonify, request, session
from flask_cors import CORS
#<strong>#Set up Flaskstrong>:
app = Flask(__name__)
#<strong>#Set up Flask to bypass CORSstrong>:
cors = CORS(app)
#Create the receiver API POST endpoint:
import os
import ocr_extract
 
ocr_extract.set_tesseract(path ='C:\\Users\\muste\\AppData\\Local\\Programs\\Tesseract-OCR\\tesseract.exe')

receivedText = {}   

@app.route("/receiver", methods=["POST"])       # this route is executed by the js file which is started by the html file
def startCodeCept():
   
   print("Before Harvest")
   os.system('npm run codeceptjs')          # start CodeceptJS
   print("After Harvest")

   url = str(readParsedData())
   ergebnis = ocr_extract.process_url(url)              
   return True

def readParsedData(): 
   global receivedText

   f = open("./test.txt", "r")                # read what was parsed by Codecept
   receivedText = f.read()
 
   print("Ergebnis in Python")
   print(receivedText)
   return receivedText
   
if __name__ == "__main__": 
   app.run(debug=True)
