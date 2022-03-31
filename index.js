const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printReadmeData = readmeDataArr => {
    console.log('==================');
    for (let i = 0; i < readmeDataArr.length; i += 1) {
        console.log(readmeDataArr[i]);
    }


    

    // Same as above 
    readmeDataArr.forEach(readmeItem => console.log(readmeItem));

};



printReadmeData(profileDataArgs);