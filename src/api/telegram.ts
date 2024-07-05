const baseUrl = 'https://api.telegram.org/bot7131284650:AAFXziYO3vXkPANtIKP5J5e1MdhXxAVYRqc';

export const sendMessage = async(message:string): Promise<void> => {
    const url = `${baseUrl}/sendMessage?chat_id=-1002214466986&text=${encodeURIComponent(message)}`;

    const response = await fetch(url);

    if(!response.ok){
        const error = await response.json();

        await Promise.reject(error.description || 'Error')
    }

    console.log('response', response);
};