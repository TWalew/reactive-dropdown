const data = {
    'cities': [
        { id: 0, name: 'Sofia' },
        { id: 1, name: 'Plovdiv' },
        { id: 2, name: 'Varna' },
        { id: 3, name: 'Burgas' },
        { id: 4, name: 'Ruse' },
        { id: 5, name: 'Stara Zagora' },
        { id: 6, name: 'Pleven' },
        { id: 7, name:  'Sliven' },
        { id: 8, name: 'Dobrich' },
        { id: 9, name: 'Shumen' },
        { id: 10, name: 'Pernik' },
        { id: 11, name: 'Haskovo' },
        { id: 12, name: 'Vratsa' },
        { id: 13, name: 'Kyustendil' },
        { id: 14, name: 'Montana' },
        { id: 15, name: 'Lovech' },
        { id: 16, name: 'Razgrad' },
        { id: 17, name: 'Borino' },
        { id: 18, name: 'Madan' },
        { id: 19, name: 'Zlatograd' },
        { id: 20, name: 'Pazardzhik' },
        { id: 21, name: 'Smolyan' },
        { id: 22, name: 'Blagoevgrad' },
        { id: 23, name: 'Nedelino' },
        { id: 24, name: 'Rudozem' },
        { id: 25, name: 'Devin' },
        { id: 26, name: 'Veliko Tarnovo' },
        { id: 27, name: 'Vidin' },
        { id: 28, name: 'Kirkovo' },
        { id: 29, name: 'Krumovgrad' },
        { id: 30, name: 'Dzhebel' },
        { id: 31, name: 'Silistra' },
        { id: 32, name: 'Sarnitsa' },
        { id: 33, name: 'Shiroka Laka' },
        { id: 34, name: 'Yambol' },
        { id: 35, name: 'Dospat' },
        { id: 36, name: 'Kardzhali' },
        { id: 37, name: 'Gabrovo' },
        { id: 38, name: 'Targovishte' },

    ]
};

function _filterItems(arr, query) {
    if (query !=='') {
        return arr.filter(function(el) {
            return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
}

export default class Service {
    static GetAllCities(name) {
        return (
            Promise.resolve(_filterItems(data.cities, name))
                .then(cities => cities)
        )
    }
}