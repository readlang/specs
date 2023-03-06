migrate((db) => {
  const collection = new Collection({
    "id": "x4lep1p904xrcuw",
    "created": "2023-03-06 17:23:29.620Z",
    "updated": "2023-03-06 17:23:29.620Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x4lep1p904xrcuw");

  return dao.deleteCollection(collection);
})
