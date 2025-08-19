import React, {useEffect, useState} from 'react'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import styles from './HW14.module.css'

const techList = [
    'html', 'css', 'javascript', 'typescript', 'scss', 'jest'
]

const getTechs = (find: string): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredTechs = find
                ? techList.filter(tech =>
                    tech.toLowerCase().includes(find.toLowerCase())
                )
                : techList
            resolve(filteredTechs)
        }, 500)
    })
}

const HW14: React.FC = () => {
    const [find, setFind] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [techs, setTechs] = useState<string[]>(techList);

    useEffect(() => {
        setLoading(true);
        getTechs(find).then(newTechs => {
            setTechs(newTechs);
            setLoading(false);
        });
    }, [find]);

    const handleDebouncedChange = (value: string) => {
        setFind(value);
    };

    return (
        <div className={styles.hwContainer} id="hw14">
            <div className={styles.hwTitle}>Hometask № 14</div>
            <div className={styles.inputWrap}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={setFind}
                    onDebouncedChange={handleDebouncedChange}
                    className={styles.debouncedInput}
                />
                <span id={'hw14-loading'} className={styles.loading}>
                    {isLoading ? '...ищем' : ' '}
                </span>
            </div>
            <div className={styles.techList}>
                {techs.map(t => (
                    <div key={t} id={'hw14-tech-' + t} className={styles.tech}>
                        {t}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HW14