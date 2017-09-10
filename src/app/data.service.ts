import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  data = [
    {'id': 1,
      'name': 'Peaceful Beach',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017059/10_qy67zr.jpg'
    },
    {'id': 2,
      'name': 'Green island', 'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017029/2_ewqy4b.jpg'
    },
    {'id': 3,
      'name': 'Trees', 'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017031/3_qwngps.jpg'
    },
    {'id': 4,
      'name': 'Beautiful Beach', 'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017033/4_p3l4r2.jpg'
    },
    {'id': 5,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017038/5_bdnzyg.jpg'
    },
    {'id': 6,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017043/6_oejf22.jpg'
    },
    {'id': 7,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017046/7_vpcchp.jpg'
    },
    {'id': 8,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017053/8_brnc1y.jpg'
    },
    {'id': 9,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017056/9_z3ilsu.jpg'
    },
    {'id': 9,
      'name': 'Another Green island',
      'location': 'http://res.cloudinary.com/meracloudtheonemachinearmy/image/upload/v1505017059/10_qy67zr.jpg'
    },
  ];
  getAllImages() {
    return this.data;
  }
}
