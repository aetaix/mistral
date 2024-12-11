const articles = [
    {
        title: 'Welcome Pixtral',
        date: 'June 2024',
        category: 'Research',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  '
    },
    {
        title: 'How AI is changing the way we build products',
        date: 'June 2024',
        category: 'Press',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  '
    },
    {
        title: 'How AI is changing the way we build products',
        date: 'June 2024',
        category: 'Research',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  '
    }
]

export default function PostList() {
    return (
        <ul className="space-y-2">
            {articles.map((article, index) => (
                <li key={index} className="p-4 border hover:border-neutral-200 hover:shadow-md">
                    <p className="flex gap-2 mb-4">
                        <span className="text-orange-500 font-semibold">{article.category}</span>
                        <span>{article.date}</span>
                    </p>
                    <h3 className="text-2xl font-semibold">{article.title}</h3>
                    <p className="text-neutral-600">{article.description}</p>
                </li>
            ))}
        </ul>
    )
}