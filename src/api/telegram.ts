const baseUrl = 'https://api.telegram.org/YOURTOKEN';

export const sendMessage = async(message:string): Promise<void> => {
    const url = `${baseUrl}/sendMessage?chat_id=YOURCHATID=${encodeURIComponent(message)}`;

    const response = await fetch(url);

    if(!response.ok){
        const error = await response.json();

        await Promise.reject(error.description || 'Error')
    }

    console.log('response', response);
};