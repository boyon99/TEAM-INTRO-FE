import type { NextApiRequest, NextApiResponse } from 'next'

const mockCategory = {
    id: 0,
    name: '프로그래밍',
}

const mockTags = [
    {
        "id": 3,
        "email": "jju@nate.com",
        "username": "",
        "role": "USER",
        "createdAt": "2023-05-09T14:04:05.735608",
        "updatedAt": "2023-05-09T14:04:09.3504749",
        "loggedInAt": "2023-05-09T14:04:09.3474637"
    }
]

const lecturesData = {
            "status": 200,
            "msg": "성공",
            "data": mockTags
        }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(lecturesData);
}