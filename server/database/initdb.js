db.createCollection("user", {
    validator: {
        $jsonSchema: {
            required: ["username", "passwd_hash", "type", "name", "business_name"],
            properties: {
                username: {
                    bsonType: "string",
                    pattern: "^\\w+$",
                        // ^\w+${10} try this later
                    description: "accept only alphanumeric and underscore"
                },
                type: {
                    bsonType: "double",
                    minimum: 0,
                    maximum: 2,
                    description: "type of user. 0-owner, 1-shop, 2-factory"
                },
                name: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    description: "name, allow uppercase, lowercase and space"
                }
            }
        }
    }
})

db.createCollection("user_pending", {
    validator: {
        $jsonSchema: {
            required: ["username", "passwd_hash", "type", "name", "business_name"],
            properties: {
                username: {
                    bsonType: "string",
                    pattern: "^\\w+$",
                        // ^\w+${10} try this later
                    description: "accept only alphanumeric and underscore"
                },
                type: {
                    bsonType: "double",
                    minimum: 0,
                    maximum: 2,
                    description: "type of user. 0-owner, 1-shop, 2-factory"
                },
                name: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    description: "name, allow uppercase, lowercase and space"
                }
            }
        }
    }
})

db.createCollection("business", {
    validator: {
        $jsonSchema: {
            required: ["name", "owner"]
        }
    }
})

db.createCollection("factory", {
    validator: {
        $jsonSchema: {
            required: ["name", "business"]
        }
    }
})

db.createCollection("shop", {
    validator: {
        $jsonSchema: {
            required: ["name", "business"]
        }
    }
})