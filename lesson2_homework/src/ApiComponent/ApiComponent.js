import React, { Component } from 'react';
import 'tailwindcss/tailwind.css';

class ApiComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: true,
            error: null,
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
                    isLoading: false,
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    isLoading: false,
                });
            });
    }

    render() {
        const { data, isLoading, error } = this.state;

        return (
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">Users from JSONPlaceholder API:</h1>

                {isLoading && <p className="text-gray-600">Loading...</p>}

                {error && <p className="text-red-500">Error: {error.message}</p>}

                {data && (
                    <ul className="list-disc pl-4">
                        {data.map(user => (
                            <li key={user.id} className="text-blue-500">{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default ApiComponent;
