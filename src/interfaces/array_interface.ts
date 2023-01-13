interface TechnologyProps {
    id: string,
    name: string,
    hashtag: (string)[]
}

let technology1: TechnologyProps = {
    id: '2',
    name: 'Java',
    hashtag: ['#java', '#oracle', '#java-dev']
}

console.log(technology1)

interface NamesProps {
    technology: TechnologyProps[]
}

let backend: NamesProps = {
    technology: [
        { id: '15', name: 'Node', hashtag: ['node', 'api']},
        { id: '18', name: 'Go', hashtag: ['backend', 'api', 'microservices']}
    ]
}

console.log(backend.technology)