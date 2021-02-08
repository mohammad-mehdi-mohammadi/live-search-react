from flask import Flask
from flask import request
from flask import jsonify
import time
import json

app = Flask(__name__)

with open('database.json') as file:
    database = json.load(file)


@app.route('/api/get-posts')
def index():
    time.sleep(2)
    results = list()
    args = request.args.to_dict()

    if 'term' not in args:
        return jsonify(results)

    term = args['term']

    for record in database:
        if term in record['title']:
            results.append(record)
            if results.__len__() >= 5:
                break

    return jsonify(results)


@app.route('/api/get-post')
def get_post():
    args = request.args.to_dict()
    result = dict()

    if 'id' not in args:
        return jsonify(result)

    for record in database:
        if str(record['id']) == args['id']:
            result = record
            break

    return jsonify(result)


if __name__ == '__main__':
    app.run(host='0.0.0.0')
