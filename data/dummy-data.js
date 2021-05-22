import Favorite from "../model/Favorite";
import Kategori from "../model/Kategori";
import Recep from "../model/Recep";

export const CATEGORIES = [
    new Kategori('1', 'Nasi Goreng', 'http://kbu-cdn.com/dk/wp-content/uploads/nasi-goreng-setan.jpg'),
    new Kategori('2', 'Perkedel Kentang', 'https://i.pinimg.com/564x/71/64/39/71643950dc091724326d6f726ba41ac6.jpg'),
    new Kategori('3', 'Hamburger', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/570px-RedDot_Burger.jpg'),
    new Kategori('4', 'Salad Kentang', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg'),
    new Kategori('5', 'Spaghetti', 'https://www.budgetbytes.com/wp-content/uploads/2018/04/The-Best-Weeknight-Pasta-Sauce-V5.jpg'),
    new Kategori('6', 'Ayam Goreng', 'https://viewtraveling.com/wp-content/uploads/2017/09/frog-legs.jpg'),
    new Kategori('7', 'Sunny Side Egg', 'https://img.taste.com.au/_rbpFTzv/w720-h480-cfill-q80/taste/2016/11/brekkie-eggs-with-matts-instant-mayo-99867-1.jpeg'),
    new Kategori('8', 'Ayam Mayo', 'https://i.ndtvimg.com/i/2015-07/asian-chicken-625_625x350_51436269921.jpg'),
    new Kategori('9', 'Roti Keju Fountain', 'https://i2.wp.com/blog.britishcornershop.co.uk/wp-content/uploads/2016/07/cheese-fondue-2.jpg?w=570&ssl=1'),
    new Kategori('10', 'Salad Telur', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/440-400-summer-egg-salad-with-basil-and-peas-ca76f87.jpg?quality=90&resize=500%2C454')
  ];

  export const FAVORITE = [
    new Favorite('1','3'),
    new Favorite('2','9'),
    new Favorite('4','8')
  ]

  export const RECEP =[
    new Recep (
      '1',
      '5',
      'mudah',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '4 Tomat',
        'Pasta',
        '1 sedok makan minyak',
        '1 bawang putih',
        '250g nasi',
        'Rempah',
        'Keju (optional)',
        ''
      ],
      [
        'Potong tomat dan bawang menjadi bagian - bagian kecil',
        'Didihkan air, tambahkan sejumput garam',
        'Masukkan pasta ke dalam air mendidih, tunggu kurang lebih 12 menit',
        'Panaskan minyak dan masukkan bawang yang sudah dipotong',
        'Setelah harum tambahkan potongan - potongan tomat dan masukkan rempah - rempah',
        'Saus sudah matang saat pasta sudah matang jgua',
        'Tambahkan keju untuk topping tambahan'
      ],
    ),
    new Recep(
      '1',
      '3',
      'Mudah',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      15,
      [
        '1 Bun Burger',
        '1 Lembar daging sapi asap',
        '1 lembar nanas',
        '1-2 lembar keju',
        'Mentega putih'
      ],
      [
        'Potong bun burger secara horizontal',
        'Olesi mentega pada salah satu sisi roti',
        'Taruh daging asap, nanas, dan keju di antara kedua bun burger',
        'Panggang pada oven selama 10 menit pada suhu 200°C'
      ],
    ),
    new Recep(
      '1',
      '1',
      'Mudah',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      15,
    [
      'Minyak',
      '2 Siung Bawang Putih',
      '250g Nasi',
      'Rempah',
      '1 sendok teh garam',
      '1 telur',
      'Kecap',
      'Sayuran sesuai selera'
    ],
    [
      'Panaskan kuali dengan api sedang, masukan minyak dan tumis bawang hingga harum',
      'Masukkan telur, aduk - aduk hingga rata, masukkan sayur - sayuran',
      'Masukkan nasi saat sayur sudah layu',
      'Tambahkan kecap sesuai selera, aduk hingga merata',
      'Tambahkan garam'
      
    ],
    )
  ]