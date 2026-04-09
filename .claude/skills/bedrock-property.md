Entity properties (also known as actor properties) allow data to be stored on entities without needing the use of components or attributes (such as minecraft:variant) in the server-side of the entity, similar to block states.

Defining Properties ​
Entity properties are defined in the BP entity's description object:

BP/entities/properties_example.json
{
    "format_version": "1.21.50",
    "minecraft:entity": {
        "description": {
            "identifier": "wiki:properties_example",
            "properties": {
                "wiki:bool_property_example": {
                    "type": "bool",
                    "default": false
                },
                "wiki:enum_property_example": {
                    "type": "enum",
                    "values": ["first", "second", "third"],
                    "default": "first"
                },
                "wiki:float_property_example": {
                    "type": "float",
                    "range": [0, 3.14],
                    "default": 2.5
                },
                "wiki:int_property_example": {
                    "type": "int",
                    "range": [0, 4],
                    "default": 4
                }
            }
        },
        "components": { ... },
        "events": { ... }
    }
}
Default Value ​
Default values, determined by the default parameter, can be defined either as specific values or as Molang expressions.

A string value will be treated as a Molang expression unless it is an enum value. Molang expressions are evaluated when the entity is first spawned.

minecraft:entity > description > properties
"example:enum_property_example": {
    "type": "enum",
    "values": ["first", "second", "third"],
    "default": "math.random_integer(0, 1) ? 'first' : 'second'"
}
Client Sync ​
To access a property from the resource pack (client-side), the client_sync parameter must be true. By default, this value is false.

minecraft:entity > description > properties
"wiki:is_sad": {
    "type": "bool",
    "default": false,
    "client_sync": true
}
Let's set a variable to the value of this property for use in an animation!

minecraft:client_entity > description
"scripts": {
    "pre_animation": [
        "v.is_sad = q.property('wiki:is_sad');"
    ]
}
Getting Property Values ​
Molang Query Function ​
Property values are returned by the property query function.

Molang Expression
!q.property('wiki:bool_property_example')
Entity Filter Test ​
Entity Filter
{
    "test": "bool_property",
    "domain": "wiki:bool_property_example",
    "operator": "==",
    "value": true
}
Command Selector Parameter ​
Command
testfor @e[has_property={wiki:enum_property_example="second"}]
Script API ​
The Entity.getProperty() method allows you to get the current value of different properties.

Script
customEntity.getProperty("wiki:int_property_example") === 2;
Setting Property Values ​
Entity Event Response ​
With entity events, you may set the entity property to a value with the set_property event response:

minecraft:entity > events
"wiki:set_entity_property": {
    "set_property": {
        "wiki:integer_property_example": 2,
        "wiki:enum_property_example": "second",
        "wiki:boolean_property_example": "!q.property('wiki:bool_property_example')"
    }
}
Script API ​
The Entity.setProperty() method allows you to set the value of a property.

Script
customEntity.setProperty("wiki:int_property_example", 2);