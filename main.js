

const getData = async() => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id`)
    console.log(response.data.data)
    return response.data.data
}

//Create constants to hold DOM elements
const DOM_Elements = {
    ranger_list: '.ranger-list'
}

//create the ranger list html
const create_list = (id, name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend',html)
}

//Function to load data and display HTML
const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.title))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = ' '
}
