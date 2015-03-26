# AzureSearchNodeJSIndexerDemo
 NodeJS program that creates an Azure Search index and automatically populates it with data from a SQL Azure instance using an indexer.
  Also comes with a simple React UI to query results.
  
  To get started:
  
  1. git clone https://github.com/EvanBoyle/AzureSearchNodeJSIndexerDemo.git
  2. npm install
  3. npm install -g http-server
  4. populate config.js with your search service URL & api key
  5. npm run indexDocuments 
  6. npm run build
  7. npm run start_server
  8. direct your browser at http://localhost:8080/index.html
  
Step five will run a script that creates and index, datasource, and indexer.  This indexer will scrape a 
SQL Azure DB, provided by the Azure Search team, and automatically push all rows into your Azure Search Index.
