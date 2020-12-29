#
import pika

params = pika.URLParameters('amqps://nycyfqgr:x5b1G40nxoJxFKc5fwKBGt1SaSkHgeEG@llama.rmq.cloudamqp.com/nycyfqgr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='main')


def callback(ch, method, properties, body):
    print('Received in main')
    print(body)

channel.basic_consume(queue='main', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
