import { photoData, albumData } from '../../photoData.js';

// export default function handler(req, res) {
//     res.status(200).json(photoData);
// }

export default function handler(req, res) {
    res.status(200).json(albumData);
}