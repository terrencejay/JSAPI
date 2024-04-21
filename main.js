
async function getData() {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,image_id`)
    console.log(response.data.data)
    return response.data.data
}


const DOM_Elements = {
    ranger_list: '.ranger-list'
}


const create_list = (id, name, imageId) => {
    const html = `
      <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">
          <img src="https://www.artic.edu/iiif/image/${imageId}/full/200,/0/default.jpg" alt="${name}" width="100" height="100">
          ${name}
      </a>
  `;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html);
}


const load_data = async () => {
    const rangers = await getData(); 

    rangers.forEach(element => create_list(element.id, element.title, element.imageId));
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = ' '
}
