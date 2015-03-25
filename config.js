var config = {};

config.apiKey = "";

// can technically use api key here as well
// since this is shipped to the browser using a read only query key is safer
config.queryKey = "";

config.serviceURL = "https://yourServiceHere.search.windows.net";

config.dataSourceName = "usgs-datasource";

config.indexerName ="usgs-indexer";

config.indexName = "features";

config.apiVersion = "2015-02-28";

config.connectionString = "Server=tcp:azs-playground.database.windows.net,1433;Database=usgs;User ID=reader;Password=EdrERBt3j6mZDP;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;";

config.tableName = "GeoNamesRI";

config.dataSourceType = "azuresql"; 

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;
