export default function getFullResponseFromAPI(success) {
  if (success) return new Promise(resolve) => { status: 200, body: 'Success' });
  return new Promise.reject(new Error('The fake API is not working currently'));
}
