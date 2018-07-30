# 介绍

NoSql not only sql 不仅仅是sql。用于超大规模数据的存储,这些类型的数据不需要固定的模式，无需多余的操作就可以实现横向拓展。

CAP原理：在计算科学中，CAP定理又被称为布鲁尔定理，它指出对于一个分布式系统来说，不可能同时满足以下三点：

1. 一致性：Consistency
2. 可用性：Avaliability
3. 分隔容忍：Partition tolerance(系统中任意信息的丢失不影响系统的继续运作)

CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。一般的系统都回保证可用性和分区容错性，当然也会保证一致性，但是不是强一致性，而知最终一致性。

MongoDB是由C++语言编写，是一个基于分布式文件存储的开源数据库系统，MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

概念：

1. database 数据库
2. collection 集合（类似于表）
3. document 文档（类似于行row）
4. field 域（类似于列）
5. primary key 主键

# 安装
自行百度

# 操作
1. 创建数据库
```mongdb
    use dbName //数据库存在，切换到数据库，不存在，创建数据库然后切换到数据库
```
2. 显示数据库
```mongdb
    show dbs;//新创建的数据库没有数据不显示
```
3. 删除数据库
```mongdb
    db.dropDatabase()
```
4. 删除集合
```mongdb
    db.collection.drop()
```
5. 插入文档
```
    db.collectionName.insert(docment)//docment可以理解为一个json对象
    db.collectionName.save(docment)//如果指定了id，可以理解为更新操作，没有指定同insert
```
6. 查看集合中的文档
```
     db.collectionName.find();
```
7. 更新文档
```
    db.collection.update();//具体参数请参考官方文档
```
8. 删除文档
```
    db.collection.remove();//具体可以参考官方文档
```

