const data = {
    'cities': [
        { id: 0,name: 'Sofia' },
        { id: 1,name: 'Plovdiv' },
        { id: 2,name: 'Varna' },
        { id: 3,name: 'Burgas' },
        { id: 4,name: 'Ruse' },
        { id: 5,name: 'Stara Zagora' },
        { id: 6,name: 'Pleven' },
        { id: 7,name: 'Sliven' },
        { id: 8,name: 'Dobrich' },
        { id: 9,name: 'Shumen' },
        { id: 10,name: 'Pernik' },
        { id: 11,name: 'Haskovo' },
        { id: 12,name: 'Vratsa' },
        { id: 12,name: 'Kyustendil' },
        { id: 12,name: 'Montana' },
        { id: 12,name: 'Lovech' },
        { id: 12,name: 'Razgrad' },
        { id: 12,name: 'Borino' },
        { id: 12,name: 'Madan' },
        { id: 12,name: 'Zlatograd' },
        { id: 12,name: 'Pazardzhik' },
        { id: 12,name: 'Smolyan' },
        { id: 12,name: 'Blagoevgrad' },
        { id: 12,name: 'Nedelino' },
        { id: 12,name: 'Rudozem' },
        { id: 12,name: 'Devin' },
        { id: 12,name: 'Veliko Tarnovo' },
        { id: 12,name: 'Vidin' },
        { id: 12,name: 'Kirkovo' },
        { id: 12,name: 'Krumovgrad' },
        { id: 12,name: 'Dzhebel' },
        { id: 12,name: 'Silistra' },
        { id: 12,name: 'Sarnitsa' },
        { id: 12,name: 'Shiroka Laka' },
        { id: 12,name: 'Yambol' },
        { id: 12,name: 'Dospat' },
        { id: 12,name: 'Kardzhali' },
        { id: 12,name: 'Gabrovo' },
        { id: 12,name: 'Targovishte' },

    ]
};

export default class Service {
    static GetAllCountries() {
        return (
            Promise.resolve(data.cities)
                .then(users => users)
        )
    }
}