const getHash = () => {
    // console.log(location.hash);
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;