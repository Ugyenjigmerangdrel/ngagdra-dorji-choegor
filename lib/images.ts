/**
 * `sizes` for a photograph that is cropped to fill a full-width area (a hero, closer or band).
 *
 * `sizes` tells the browser how wide the picture will be drawn so it can pick a file. When a
 * landscape photograph fills an area taller than its own shape, it is drawn far wider than the
 * area itself and the overflow is cropped, so "100vw" picks a file that is too small and the
 * photograph is stretched and soft. On a phone held upright a 3:2 photograph filling the screen
 * is drawn about three screens wide.
 */
export const fillSizes = "(max-width: 700px) 300vw, (max-width: 1100px) 160vw, 100vw";
