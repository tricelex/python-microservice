import pika

params = pika.URLParameters('amqps://nycyfqgr:x5b1G40nxoJxFKc5fwKBGt1SaSkHgeEG@llama.rmq.cloudamqp.com/nycyfqgr')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method. body):
    channel.basic_publish(exchange='', routing_key='main', body='Hello')
