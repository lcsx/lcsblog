# flaskReatful API

#### 简单的restful api 
``` js
from flask import Flask, request
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

// 跨域支持
def after_request(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

app.after_request(after_request)

todos = {
	'lcs':{'name':'v111'}
}

class TodoSimple(Resource):
    def get(self, todo_id):
        return todos[todo_id]

    def post(self, todo_id):
        todos[todo_id] = request.form['data']
        return {todo_id: todos[todo_id]}

api.add_resource(TodoSimple, '/<string:todo_id>')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
```