/*  - [x] Write a script called urls.js, that does the following:
        - [x] It is called on the command line like `node urls.js FILENAME`, and it reads the contents of FILENAME ( each line of that file will be a URL).
        - [x] For each URL, it will get that page (a GET request to the URL) and save HTML in a new file.
        - [x] For each URL, the output filename should be the hostname of the URL. 
                For example, for the input URL http://yahoo.com/blah/blah, your script should write the contents to a plain text file called `yahoo.com`
    - [x] Handle Errors
        - [x] If you cannot read the original file (FILENAME), immediately end your script with an error printed to the console.
        - [x] If you cannot download a particular URL or cannot write to a particular output file, print an error to the console saying so, but continue on with the rest
                of the script.
*/
const fs = require("node:fs");
const axios = require('axios');
const { url } = require("node:inspector");
const args = process.argv;

function read_contents(FILENAME = args[2]){
    try{
        const data = fs.readFileSync(FILENAME, 'utf8');
        return data.split('\n');
    }catch(err){
        console.error('Error reading file:', err);
        return;
    }
}

function write_contents(FILENAME, data){
    /* reads data and writes it to sites/ directory. If file cannot write then THROWS err*/
    try{
        const dir = 'sites'
        fs.writeFileSync(`${dir}/${FILENAME}`, data);
        console.log('Wrote to', FILENAME);
    }
    catch(err){
        console.error('Error writing file:', err);
        return;
    }
    return 0;
}

function clean_names(url_path='http://example.com/api/your_mom'){
    /* cleans url_path names in urls.txt to only include domain name (e.g. "example.com")*/
    let new_url = url_path;
    let start = 0;
    let end = 0;
    const protocols = ['http://', 'https://'];
    const TLD = ['.com', '.org', '.net', '.gov', '.mil', '.edu'];
    for(const p of protocols){
        let protocol_exists = new_url.indexOf(p);
        if(protocol_exists !== -1){
            let length = p.length;
            start = length;
            break;
        }
    }
    for(const domain_name of TLD){
        let domain_exists = new_url.indexOf(domain_name);
        if(domain_exists !== -1){
            let length = domain_exists + domain_name.length;
            end = length;
            break;
        }
    }
    return new_url.substring(start, end);
}

async function main(){
    let url_data = read_contents(); // the list of urls to scan
    for(const url of url_data){ // requests each of the urls, cleans the name of them, writes data to the url name
        try{
            let request = await axios.get(url);
            let data = request.data;
            let FILENAME = clean_names(url);
            write_contents(FILENAME, data);
        }catch(err){
            console.log('Error: Cannot get data from url:', url);
        }
    }
    return "Files written :)";
}

main();
