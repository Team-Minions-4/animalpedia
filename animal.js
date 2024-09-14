// api/animals.js
export default function handler(req, res) {
    // Sample data; replace with database or dynamic content if needed
    const animals = [
        { name: 'Lion' },
        { name: 'Tiger' },
        { name: 'Bear' },
        { name: 'Elephant' }
    ];
    res.status(200).json(animals);
}
