from flask import Flask, jsonify, request, session
from flask_cors import CORS
#<strong>#Set up Flaskstrong>:
app = Flask(__name__)
#<strong>#Set up Flask to bypass CORSstrong>:
cors = CORS(app)
#Create the receiver API POST endpoint:

receivedText = {}

@app.route("/receiver", methods=["POST"])
def postME():
   global receivedText
   data = request.get_json()
   receivedText = data
   data = jsonify(data)
   useData()
   return data
   
def useData():
    print("ABC")
    print(receivedText)
   
if __name__ == "__main__": 
   app.run(debug=True)