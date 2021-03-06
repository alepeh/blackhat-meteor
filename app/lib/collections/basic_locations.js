Locations = new Mongo.Collection('locations');


if (Meteor.isServer) {
    Locations.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function (userId, doc) {
            return false;
        }
    });
}

Contact = new SimpleSchema({
    firstname: {
        type: String,
        label: "Vorname",
        optional: true,
        max: 100
    },
    lastname: {
        type: String,
        label: "Nachname",
        optional: true,
        max: 100
    },
    phone: {
        type: String,
        label: "Telefon",
        optional: true,
        max: 30
    },
    email: {
        type: String,
        label: "email",
        optional: true,
        regEx: SimpleSchema.RegEx.Email
    }
});

Location = new SimpleSchema({
    city: {
        type: String,
        label: "Ort",
        optional: true,
        max: 100
    },
    street: {
        type: String,
        label: "Straße",
        optional: true,
        max: 100
    },
    number: {
        type: String,
        label: "Nummer",
        optional: true,
        max: 50
    },
    contact: {
        type: Contact,
        optional: true,
        label: "Kontakt"
    },
    authority: {
        type: String,
        label: "Gemeindeamt",
        optional: true,
        max: 100
    }
});

Locations.attachSchema(Location);
