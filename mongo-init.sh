#!/bin/bash
"${mongo[@]}" "$MONGO_DB" <<-EOJS
  db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASSWORD",
    roles: [
      {
        role: "readWrite",
        db: "$MONGO_DB"
      }
    ]
  });
EOJS
