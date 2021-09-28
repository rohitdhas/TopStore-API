export function sendRequest(route, box_id, setState, method) {

    const spinner = document.querySelector(`#${box_id} > pre.spinner`);
    spinner.classList.add('active')

    fetch(`http://localhost:4000/${route}`, {
        method: method || 'GET'
    })
        .then((res) => res.json())
        .then((data) => {
            setState(data)
            spinner.classList.remove('active')
        })
        .catch((err) => console.log(err));
}

export function staticRequests(method, setState) {
    switch (method) {
        case 'POST':
            setState({
                message: "Product Created!",
                data: {
                    id: 61,
                    name: "Nike T-Shirt",
                    price: 2000,
                    description: "Lorem ipsum set dolor...",
                    image: "https://picsum.photos/200/300",
                    category: "clothing"
                }
            })
            break;

        case 'PUT':
            setState({
                message: "Product Updated!",
                data: {
                    id: 2,
                    name: "Nike T-Shirt",
                    price: 2000,
                    description: "Lorem ipsum set dolor...",
                    image: "https://picsum.photos/200/300",
                    category: "clothing"
                }
            })
            break;

        case 'PATCH':
            setState({
                message: "Product Updated!",
                data: {
                    name: "Nike T-Shirt",
                    price: 12000,
                    description: "lorem ipsum dolor ...",
                    image: "https://picsum.photos/200/300",
                    category: "electronics"
                }
            })
            break;

        default:
            setState({})
            break;
    }
}