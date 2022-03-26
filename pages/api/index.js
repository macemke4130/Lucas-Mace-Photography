import { photoData } from '../../photoData.js';

export default function handler(req, res) {
    res.status(200).json(photoData);
}