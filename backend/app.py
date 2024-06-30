from flask import Flask, jsonify
import boto3
import os
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
dynamodb = boto3.resource('dynamodb', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY, region_name='ca-central-1')

@app.route('/api/getprojects', methods = ['GET'])
def get_projects():
    table = dynamodb.Table('portfolio_projects')
    response = table.scan()
    items = response['Items']
    return jsonify(items)

@app.route('/')
def hello():
    return "Hey!!"


if __name__ == '__main__':
    app.run(debug=True)