# Kafka

Kafka is event streaming platform.

## Topics

In traditional database systems, data are stored in some structure like tables. But Kafka takes different approach, it usage log system, log is a stream of data that do not change after it is pushed. These logs are known as topics in Kafka.

Topics are logs not queues, so what happened queues get cleared when data pops out, but not in topics. Topics can stored data for forever.

### Partitions

Topics can be further divided into partitons based on the key. If we do not provide key, logs will be distributed to different partition in round robin fashion.

## Brokers

Till now, there is no mention of actually process of Kafka running. So, the computer which runs the Kafka processes on JVM are called brokers these brokers help topics to distribute the partition. Group of these brokers are called clusters.

### Replication

We also need to ensure that the data are safe. Therefore, each partition are also distributed across available broker machines. But those secondary replicas come in action very specifically. They themselves do copy data form main partition also known as lead replica, and when this replica goes down, new leader is elected. Or secondary replica can be used for reading explicitly.

## Producers

They are main thing which are responsible for sending configuration and sending data to the Kafka service.


## Consumers

Who will read those data which were being written onto topics. Yeah! Consumers, they are the client that can read from different partition or they can be distributed for fault tolerance.



