import argparse
from pathlib import Path

import numpy as np
import py360convert
from PIL import Image


FACE_NAMES = {
    "F": "pz.jpg",
    "R": "px.jpg",
    "B": "nz.jpg",
    "L": "nx.jpg",
    "U": "py.jpg",
    "D": "ny.jpg",
}


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Convert an equirectangular panorama to a Three.js cubemap."
    )
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--face-size", type=int, default=2048)
    parser.add_argument("--quality", type=int, default=82)
    args = parser.parse_args()

    panorama = np.asarray(Image.open(args.source).convert("RGB"))
    faces = py360convert.e2c(
        panorama,
        face_w=args.face_size,
        mode="bilinear",
        cube_format="dict",
    )

    args.output.mkdir(parents=True, exist_ok=True)
    for face, filename in FACE_NAMES.items():
        Image.fromarray(faces[face]).save(
            args.output / filename,
            format="JPEG",
            quality=args.quality,
            optimize=True,
            progressive=True,
        )


if __name__ == "__main__":
    main()
