import json

import pika

params = pika.URLParameters('amqps://nycyfqgr:x5b1G40nxoJxFKc5fwKBGt1SaSkHgeEG@llama.rmq.cloudamqp.com/nycyfqgr')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)
