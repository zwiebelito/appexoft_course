import React, { Component } from 'react';
import 'tailwindcss/tailwind.css';
import ReactPaginate from "react-paginate";

class ApiComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: true,
            error: null,
            currentPage: 0,
            itemsPerPage: 2,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                this.setState({
                    data: data,
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    isLoading: false,
                });
            });
    }

    handlePageClick = (selectedPage) => {
        this.setState({ currentPage: selectedPage.selected });
    };


    render() {

        const { data, isLoading, error, currentPage, itemsPerPage } = this.state;

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return (
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">Users from JSONPlaceholder API:</h1>

                {isLoading && <p className="text-gray-600">Loading...</p>}

                {error && <p className="text-red-500">Error: {error.message}</p>}

                {data && (
                    <div>
                        <ul className="list-disc pl-4 mb-4">
                            {data.slice(startIndex, endIndex).map((user) => (
                                <li key={user.id} className="text-blue-500">{user.name}</li>
                            ))}
                        </ul>
                        <ReactPaginate
                            pageCount={Math.ceil(data.length / itemsPerPage)}
                            marginPagesDisplayed={1}
                            onPageChange={this.handlePageClick}
                            containerClassName="flex justify-start gap-5 items-center w-300
                            text-red-400 font-bold"
                            pageClassName='hover:text-red-300'
                            previousClassName='hover:text-red-300'
                            nextClassName='hover:text-red-300'
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ApiComponent;
