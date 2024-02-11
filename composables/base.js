export const useBase = () => {
    const base = useState('base', () => 'https://mansourbijad.ir')

    return { base }
}