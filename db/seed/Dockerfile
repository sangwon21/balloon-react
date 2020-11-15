FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db balloon-react-local --collection users --type json --file /init.json --jsonArray