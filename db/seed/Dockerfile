FROM mongo:4.4.1-bionic

COPY init.json /init.json
CMD mongoimport --host mongo --db balloon-react-local --collection users --type json --file /init.json --jsonArray