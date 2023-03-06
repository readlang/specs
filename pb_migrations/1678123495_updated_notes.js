migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4lep1p904xrcuw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ohchfvh",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djfsgcsg",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4lep1p904xrcuw")

  // remove
  collection.schema.removeField("3ohchfvh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djfsgcsg",
    "name": "text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
