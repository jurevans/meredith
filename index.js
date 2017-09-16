import operations from './modules/operations';
import settings from './settings';

import axios from 'axios';

const firstStepURL = settings.getPath('firststep');

console.log('firstStepURL', firstStepURL);

axios.get(firstStepURL)
    .then(results => {
        console.log('FIRST_STEP_RESULTS', results.data);

        const token = results.data.next_endpoint.split('&token=')[1];

        const getSolution = () => {
            switch (results.data.operation) {
                case 'addition': {
                    console.log('ADDITION');
                    return operations.add(results.data.arguments);
                }

                case 'multiplication': {
                    console.log('MULTIPLICATION');
                    return operations.multiply(results.data.arguments);
                }

                case 'next_fibonacci_number': {
                    console.log('NEXT_FIBONACCI');
                    return operations.nextFibonacciNumber(results.data.arguments);
                }

                case 'date_addition': {
                    console.log('DATE_ADDITION');
                    return operations.addToDate(results.data.arguments);
                }
            }
        };

        const nextEndpoint = settings.getPath(getSolution(), token);

        /** Refactor to continue executing requests until operations_remaining is zero! "addToDate" would have to be implemented first */
        console.log('nextEndpoint', nextEndpoint);

        axios.get(nextEndpoint)
            .then(response => {
                console.log('NEXT_ENDPOINT GOT:', response.data);
            });

    }).catch(error => error);