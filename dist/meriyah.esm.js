function isIDStart(code) {
    return (unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
}
const unicodeLookup = ((compressed, lookup) => {
    const result = new Uint32Array(104448);
    let index = 0;
    let subIndex = 0;
    while (index < 3460) {
        const inst = compressed[index++];
        if (inst < 0) {
            subIndex -= inst;
        }
        else {
            let code = compressed[index++];
            if (inst & 2)
                code = lookup[code];
            if (inst & 1) {
                result.fill(code, subIndex, subIndex += compressed[index++]);
            }
            else {
                result[subIndex++] = code;
            }
        }
    }
    return result;
})([-1, 2, 27, 2, 28, 2, 5, -1, 0, 77595648, 3, 46, 2, 3, 0, 14, 2, 57, 2, 58, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 20, 2, 0, 0, 608174079, 2, 0, 2, 128, 2, 6, 2, 62, -1, 2, 64, 2, 25, 2, 1, 3, 0, 3, 0, 4294901711, 2, 41, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2965387679, 0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 2, 192, 0, 4294828031, 0, 3825204735, 0, 123747807, 0, 65487, 2, 3, 0, 4092591615, 0, 1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247020, 2, 69, 0, 4284449919, 0, 851904, 2, 4, 2, 11, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093591391, -1, 0, 50331649, 0, 3265266687, 2, 35, 0, 4294844415, 0, 4278190047, 2, 22, 2, 126, -1, 3, 0, 2, 2, 32, 2, 0, 2, 9, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 10, 0, 261632, 2, 19, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2088959, 2, 30, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 43, 0, 67057664, 3, 0, 2, 2, 42, 2, 0, 2, 31, 2, 0, 2, 18, 2, 7, 0, 268374015, 2, 29, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 6, 2, 0, 2, 7, 0, 2684354559, 0, 67044351, 0, 1073676416, -2, 3, 0, 2, 2, 44, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 52, 0, 4294960127, 2, 9, 2, 40, 2, 10, 0, 4294377472, 2, 11, 3, 0, 7, 0, 4227858431, 3, 0, 8, 2, 12, 2, 0, 2, 81, 2, 9, 2, 0, 2, 82, 2, 83, 2, 84, -1, 2, 122, 0, 1048577, 2, 85, 2, 13, -1, 2, 13, 0, 131042, 2, 86, 2, 87, 2, 88, 2, 0, 2, 36, -83, 2, 0, 2, 54, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14, 2, 0, 0, 2147516671, 2, 23, 3, 89, 2, 2, 0, -16, 2, 90, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 80, 2, 16, 3, 0, 2, 2, 49, 2, 11, -1, 2, 17, -16, 3, 0, 205, 2, 18, -2, 3, 0, 655, 2, 19, 3, 0, 36, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 92, 2, 119, 2, 0, 0, 3220242431, 3, 0, 3, 2, 20, 2, 21, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 95, 2, 21, 2, 0, 2, 26, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 8, 2, 22, 3, 0, 2, 0, 67076097, 2, 7, 2, 0, 2, 23, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0, 8191999, 2, 98, 2, 99, 2, 15, 2, 33, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 100, 2, 101, 2, 6, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 34, -1, 0, 3774349439, 2, 102, 2, 103, 3, 0, 2, 2, 20, 2, 25, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 47, 2, 0, 2, 26, 2, 104, 2, 19, 0, 1638399, 2, 172, 2, 105, 3, 0, 3, 2, 22, 2, 27, 2, 28, 2, 5, 2, 29, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 30, -3, 2, 150, -4, 2, 22, 2, 0, 2, 38, 0, 1, 2, 0, 2, 63, 2, 31, 2, 11, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 32, 2, 111, 2, 6, 2, 0, 2, 33, 2, 0, 2, 50, -4, 3, 0, 9, 2, 23, 2, 18, 2, 26, -4, 2, 112, 2, 113, 2, 18, 2, 23, 2, 7, -2, 2, 114, 2, 18, 2, 34, -2, 2, 0, 2, 115, -2, 0, 4277137519, 0, 2269118463, -1, 3, 22, 2, -1, 2, 35, 2, 39, 2, 0, 3, 18, 2, 2, 37, 2, 20, -3, 3, 0, 2, 2, 36, -1, 2, 0, 2, 37, 2, 0, 2, 37, 2, 0, 2, 48, -14, 2, 22, 2, 45, 2, 38, -4, 2, 23, 3, 0, 2, 2, 39, 0, 2147549120, 2, 0, 2, 11, 2, 17, 2, 134, 2, 0, 2, 53, 0, 4294901872, 0, 5242879, 3, 0, 2, 0, 402595359, -1, 2, 118, 0, 1090519039, -2, 2, 120, 2, 40, 2, 0, 0, 67045375, 2, 41, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3, 0, 2, 0, 3288270847, -1, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 43, -1, 2, 10, 2, 44, -6, 2, 0, 2, 11, -3, 3, 0, 2, 0, 2147484671, -5, 2, 123, 0, 4244635647, 0, 27, 2, 0, 2, 7, 2, 45, 2, 0, 2, 65, -1, 2, 0, 2, 42, -8, 2, 55, 2, 46, 0, 67043329, 2, 124, 2, 47, 0, 8388351, -2, 2, 125, 0, 3028287487, 2, 48, 2, 127, 0, 33259519, 2, 43, -9, 2, 23, -8, 3, 0, 28, 2, 34, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -85, 3, 0, 33, 2, 49, -126, 3, 0, 18, 2, 39, -269, 3, 0, 17, 2, 42, 2, 7, 2, 43, -2, 2, 17, 2, 51, 2, 0, 2, 23, 0, 67043343, 2, 129, 2, 19, -21, 3, 0, 2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 2, 130, 3, 0, 191, 2, 52, 3, 0, 23, 2, 37, -296, 3, 0, 8, 2, 7, -1, 2, 131, 2, 132, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 133, 0, 1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13, 3, 0, 2, 2, 53, 2, 0, 2, 135, 2, 136, 2, 56, 2, 0, 2, 137, 2, 138, 2, 139, 3, 0, 10, 2, 140, 2, 141, 2, 15, 3, 53, 2, 3, 54, 2, 3, 55, 2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 91, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -42, 0, 4194303871, 0, 2011, -6, 2, 0, 0, 1073684479, 0, 17407, -11, 2, 0, 2, 34, -40, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 44, -37, 2, 56, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -138, 3, 0, 1334, 2, 23, -1, 3, 0, 129, 2, 30, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -22583, 3, 0, 7, 2, 19, -6130, 3, 5, 2, -1, 0, 69207040, 3, 46, 2, 3, 0, 14, 2, 57, 2, 58, -3, 0, 3168731136, 0, 4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 60, 2, 0, 2, 36, -1, 2, 17, 2, 61, -1, 2, 0, 2, 62, 0, 4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2, 19, 2, 63, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639, 0, 71303167, 0, 272, 2, 42, 2, 62, -1, 2, 64, -2, 2, 97, 2, 65, 0, 4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 66, 2, 67, 0, 33554435, 2, 121, 2, 66, 2, 151, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1, 2, 68, 0, 603979263, 2, 160, 0, 3, 0, 4294828001, 0, 602930687, 2, 181, 0, 393219, 2, 68, 0, 671088639, 0, 2154840064, 0, 4227858435, 0, 4236247008, 2, 69, 2, 39, -1, 2, 4, 0, 917503, 2, 39, -1, 2, 70, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 35, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 72, 2, 0, 2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, -1, 2, 19, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 253951, 3, 20, 2, 0, 122879, 2, 0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 18, 2, 7, -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 43, -1, 2, 23, 2, 0, 2, 30, -2, 0, 128, -2, 2, 80, 2, 8, 0, 4064, -1, 2, 117, 0, 4227907585, 2, 0, 2, 116, 2, 0, 2, 50, 0, 4227915776, 2, 9, 2, 40, 2, 10, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 12, 2, 0, 2, 81, 2, 9, 2, 0, 2, 82, 2, 83, 2, 84, -3, 2, 85, 2, 13, -3, 2, 86, 2, 87, 2, 88, 2, 0, 2, 36, -83, 2, 0, 2, 54, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2, 14, 2, 0, 0, 33023, 2, 23, 3, 89, 2, -17, 2, 90, 0, 524157950, 2, 4, 2, 0, 2, 91, 2, 4, 2, 0, 2, 15, 2, 80, 2, 16, 3, 0, 2, 2, 49, 2, 11, -1, 2, 17, -16, 3, 0, 205, 2, 18, -2, 3, 0, 655, 2, 19, 3, 0, 36, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 92, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 19, 2, 21, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 95, 2, 21, 0, 4294965179, 0, 7, 2, 0, 2, 8, 2, 93, 2, 8, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 39, 2, 22, 2, 97, 2, 37, 2, 165, 0, 2080440287, 2, 0, 2, 36, 2, 142, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101, 0, 1837055, 2, 98, 2, 99, 2, 15, 2, 33, 3, 0, 3, 0, 7, 3, 0, 349, 2, 100, 2, 101, 2, 6, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 34, -1, 0, 2700607615, 2, 102, 2, 103, 3, 0, 2, 2, 20, 2, 25, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 47, 2, 0, 2, 26, 2, 104, -3, 2, 105, 3, 0, 3, 2, 22, -1, 3, 5, 2, 2, 29, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 30, -8, 2, 22, 2, 0, 2, 38, -1, 2, 0, 2, 63, 2, 31, 2, 18, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 17, 2, 111, 2, 6, 2, 0, 2, 33, 2, 0, 2, 50, -4, 3, 0, 9, 2, 23, 2, 18, 2, 26, -4, 2, 112, 2, 113, 2, 18, 2, 23, 2, 7, -2, 2, 114, 2, 18, 2, 34, -2, 2, 0, 2, 115, -2, 0, 4277075969, 2, 18, -1, 3, 22, 2, -1, 2, 35, 2, 143, 2, 0, 3, 18, 2, 2, 37, 2, 20, -3, 3, 0, 2, 2, 36, -1, 2, 0, 2, 37, 2, 0, 2, 37, 2, 0, 2, 50, -14, 2, 22, 2, 45, 2, 116, -4, 2, 23, 2, 117, 2, 52, -2, 2, 117, 2, 19, 2, 17, 2, 36, 2, 117, 2, 39, 0, 4294901776, 0, 4718591, 2, 117, 2, 37, 0, 335544350, -1, 2, 118, 2, 119, -2, 2, 120, 2, 40, 2, 7, -1, 2, 121, 2, 66, 0, 3758161920, 0, 3, -4, 2, 0, 2, 30, 0, 2147485568, -1, 2, 0, 2, 19, 0, 176, -5, 2, 0, 2, 49, 2, 183, -1, 2, 0, 2, 19, 2, 195, -1, 2, 0, 0, 16779263, -2, 2, 11, -7, 2, 0, 2, 119, -3, 3, 0, 2, 2, 122, -5, 2, 123, 2, 38, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0, 536871935, -1, 2, 0, 2, 42, -8, 2, 55, 2, 49, 0, 1, 2, 124, 2, 19, -3, 2, 125, 2, 38, 2, 126, 2, 127, 0, 16778239, -10, 2, 37, -8, 3, 0, 28, 2, 34, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -85, 3, 0, 33, 2, 49, -126, 3, 0, 18, 2, 39, -269, 3, 0, 17, 2, 42, 2, 7, -3, 2, 17, 2, 128, 2, 0, 2, 19, 2, 50, 2, 129, 2, 19, -21, 3, 0, 2, -4, 3, 0, 2, 0, 67583, -1, 2, 25, -2, 2, 130, 3, 0, 191, 2, 52, 3, 0, 23, 2, 37, -296, 3, 0, 8, 2, 7, -1, 2, 131, 2, 132, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 133, 2, 134, -187, 3, 0, 2, 2, 53, 2, 0, 2, 135, 2, 136, 2, 56, 2, 0, 2, 137, 2, 138, 2, 139, 3, 0, 10, 2, 140, 2, 141, 2, 15, 3, 53, 2, 3, 54, 2, 3, 55, 2, 2, 142, -73, 2, 0, 0, 1065361407, 0, 16384, -11, 2, 0, 2, 119, -40, 3, 0, 6, 2, 143, -1, 3, 0, 2, 0, 2063, -37, 2, 56, 2, 144, 2, 145, 2, 146, 2, 147, 2, 148, -138, 3, 0, 1334, 2, 23, -1, 3, 0, 129, 2, 30, 3, 0, 6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -28719, 2, 0, 0, 1, -1, 2, 122, 2, 0, 0, 8193, -21, 2, 191, 0, 10255, 0, 4, -11, 2, 67, 2, 170, -1, 0, 71680, -1, 2, 161, 0, 4292900864, 0, 805306431, -5, 2, 150, -1, 2, 177, -1, 2, 200, -2, 2, 124, -1, 2, 154, -1, 2, 157, 2, 151, 2, 164, 2, 0, 0, 3223322624, 2, 37, 0, 4, -4, 2, 189, 0, 205128192, 0, 1333757536, 0, 2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751, 0, 278545, 2, 152, 0, 4294886464, 0, 33292336, 0, 417809, 2, 152, 0, 1329579616, 0, 4278190128, 0, 700594195, 0, 1006647527, 0, 4286497336, 0, 4160749631, 2, 153, 0, 469762560, 0, 4171219488, 0, 8323120, 2, 153, 0, 202375680, 0, 3214918176, 0, 4294508592, 0, 139280, -1, 0, 983584, 0, 48, 0, 58720275, 0, 3489923072, 0, 10517376, 0, 4293066815, 0, 1, 0, 2013265920, 2, 176, 2, 0, 0, 2089, 0, 3221225552, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216, 2, 150, 0, 4160757760, 2, 0, -6, 2, 166, -11, 0, 3263218176, -1, 0, 49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 154, 2, 159, 2, 178, -2, 2, 162, -20, 0, 3758096385, -2, 2, 155, 0, 4292878336, 2, 21, 2, 168, 0, 4294057984, -2, 2, 163, 2, 156, 2, 174, -2, 2, 155, -1, 2, 180, -1, 2, 169, 2, 122, 0, 4026593280, 0, 14, 0, 4292919296, -1, 2, 158, 0, 939588608, -1, 0, 805306368, -1, 2, 122, 0, 1610612736, 2, 156, 2, 157, 3, 0, 2, -2, 2, 158, 2, 159, -3, 0, 267386880, -1, 2, 160, 0, 7168, -1, 0, 65024, 2, 154, 2, 161, 2, 171, -7, 2, 167, -8, 2, 162, -1, 0, 1426112704, 2, 163, -1, 2, 186, 0, 271581216, 0, 2149777408, 2, 19, 2, 161, 2, 122, 0, 851967, 0, 3758129152, -1, 2, 19, 2, 179, -4, 2, 158, -20, 2, 193, 2, 164, -56, 0, 3145728, 2, 185, -4, 2, 165, 2, 122, -4, 0, 32505856, -1, 2, 166, -1, 0, 2147385088, 2, 21, 1, 2155905152, 2, -3, 2, 17, 2, 0, 2, 167, -2, 2, 168, -6, 2, 169, 0, 4026597375, 0, 1, -1, 0, 1, -1, 2, 170, -3, 2, 143, 2, 67, -2, 2, 165, 2, 171, -1, 2, 175, 2, 122, -6, 2, 122, -213, 2, 169, -657, 2, 17, -36, 2, 172, -1, 2, 187, -10, 2, 198, -5, 2, 173, -6, 0, 4294967171, 2, 23, -1, 0, 4227919872, -1, 2, 173, -2, 0, 4227874752, -3, 0, 2146435072, 2, 159, -2, 0, 1006649344, 2, 122, -1, 2, 21, 0, 201375744, -3, 0, 134217720, 2, 21, 0, 4286677377, 0, 32896, -1, 2, 161, -3, 2, 174, -349, 2, 175, 0, 1920, 2, 176, 3, 0, 264, -11, 2, 177, -2, 2, 178, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0, 524284, -11, 2, 19, -1, 2, 184, -1, 2, 182, 0, 3221291007, 2, 178, -1, 0, 524288, 0, 2158720, -3, 2, 159, 0, 1, -4, 2, 122, 0, 3808625411, 0, 3489628288, 2, 199, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2, 171, 0, 120, 0, 7340032, -2, 0, 4026564608, 2, 4, 2, 19, 2, 163, 3, 0, 4, 2, 159, -1, 2, 179, 2, 176, -1, 0, 8176, 2, 180, 2, 171, 2, 181, -1, 0, 4290773232, 2, 0, -4, 2, 163, 2, 188, 0, 15728640, 2, 176, -1, 2, 161, -1, 0, 4294934512, 3, 0, 4, -9, 2, 21, 2, 169, 2, 182, 3, 0, 4, 0, 704, 0, 1849688064, 0, 4194304, -1, 2, 122, 0, 4294901887, 2, 0, 0, 130547712, 0, 1879048192, 2, 197, 3, 0, 2, -1, 2, 183, 2, 184, -1, 0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0, 4286580608, -1, 0, 29360128, 2, 185, 0, 16252928, 0, 3791388672, 2, 40, 3, 0, 2, -2, 2, 194, 2, 0, -1, 2, 25, -1, 0, 66584576, -1, 2, 190, 3, 0, 9, 2, 122, 3, 0, 4, -1, 2, 161, 2, 178, 3, 0, 4, 2, 21, -2, 0, 245760, 0, 2147418112, -1, 2, 150, 2, 202, 0, 4227923456, -1, 2, 186, 2, 187, 2, 21, -2, 2, 177, 0, 4292870145, 0, 262144, 2, 122, 3, 0, 2, 0, 1073758848, 2, 188, -1, 0, 4227921920, 2, 189, 0, 68289024, 0, 528402016, 0, 4292927536, 3, 0, 4, -2, 0, 335544320, 2, 0, -2, 2, 190, 3, 0, 5, -1, 2, 185, 2, 163, 2, 0, -2, 0, 4227923936, 2, 63, -1, 2, 155, 2, 96, 2, 0, 2, 154, 2, 158, 3, 0, 6, -1, 2, 176, 3, 0, 3, -2, 0, 2146959360, 3, 0, 5, 0, 768, 2, 191, 2, 80, -2, 2, 161, -2, 2, 117, -1, 2, 155, 3, 0, 8, 0, 512, 0, 8388608, 2, 192, 2, 172, 2, 184, 0, 4286578944, 3, 0, 2, 0, 1152, 0, 1266679808, 2, 190, 0, 576, 0, 4261707776, 2, 96, 3, 0, 9, 2, 155, 3, 0, 6, -1, 0, 2147221504, -28, 2, 178, 3, 0, 3, -3, 0, 4292902912, -6, 2, 97, 3, 0, 85, -33, 0, 4294934528, 3, 0, 126, -18, 2, 193, 3, 0, 269, -17, 2, 155, 2, 122, 2, 196, 3, 0, 2, 2, 19, 0, 4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 21, -2, 2, 171, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 2, 97, -191, 2, 173, -23, 2, 25, 3, 0, 296, -8, 2, 122, 2, 0, 0, 4294508543, 0, 65295, -11, 2, 176, 3, 0, 72, -3, 0, 3758159872, 0, 201391616, 3, 0, 155, -7, 2, 169, -1, 0, 384, -1, 0, 133693440, -3, 2, 194, -2, 2, 29, 3, 0, 4, 2, 168, -2, 2, 21, 2, 155, 3, 0, 4, -2, 2, 186, -1, 2, 150, 0, 335552923, 2, 195, -1, 0, 538974272, 0, 2214592512, 0, 132000, -10, 0, 192, -8, 0, 12288, -21, 0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284, 3, 0, 6, -1, 0, 3221282816, 2, 196, 3, 0, 11, -1, 2, 197, 3, 0, 40, -6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 38, -1, 2, 201, 3, 0, 2, 0, 1, 2, 163, 3, 0, 6, 2, 195, 0, 4110942569, 0, 1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2, 47, 3, 0, 8, -1, 2, 158, -2, 2, 168, 0, 98304, 0, 65537, 2, 169, 2, 172, -2, 2, 172, -1, 2, 63, 2, 0, 2, 116, 0, 65528, 2, 176, 0, 4294770176, 2, 29, 3, 0, 4, -30, 2, 169, 0, 4160806912, -3, 2, 168, -2, 2, 155, 2, 198, 2, 158, -1, 2, 190, -1, 2, 161, 0, 4294950912, 3, 0, 2, 2, 199, -2, 0, 58982400, -1, 0, 14360, 2, 200, -3, 2, 168, 0, 4176527360, 0, 4290838520, 3, 0, 43, -1334, 2, 21, 2, 0, -129, 2, 201, -6, 2, 163, -180, 2, 202, -233, 2, 4, 3, 0, 96, -16, 2, 163, 3, 0, 22583, -7, 2, 17, 3, 0, 6128], [4294967295, 4294967291, 4092460543, 4294828015, 4294967294, 134217726, 268435455, 2147483647, 1048575, 1073741823, 3892314111, 134217727, 1061158911, 536805376, 4294910143, 4160749567, 4294901759, 4294901760, 4194303, 65535, 262143, 4286578688, 536870911, 8388607, 4294918143, 4294443008, 255, 67043328, 2281701374, 4294967232, 2097151, 4294903807, 4294902783, 4294902015, 67108863, 4294967039, 511, 524287, 131071, 127, 4294902271, 4294549487, 33554431, 1023, 67047423, 4294901888, 4286578687, 4294770687, 67043583, 32767, 15, 2047999, 16777215, 4292870143, 4294934527, 4294966783, 4294967279, 262083, 20511, 4290772991, 41943039, 493567, 2047, 4294959104, 1071644671, 603979775, 602799615, 65536, 4294828000, 805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311, 4294942719, 33540095, 4294905855, 4294967264, 2868854591, 1608515583, 265232348, 534519807, 2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951, 4294967292, 4294965759, 124, 4294966272, 4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 268369920, 4292804608, 486341884, 4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294966591, 2445279231, 3670015, 3238002687, 63, 4294967288, 4294705151, 4095, 3221208447, 4294549472, 2147483648, 4294966527, 4294705152, 4294966143, 64, 4294966719, 16383, 3774873592, 11, 458752, 4294902000, 536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087, 31, 184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763, 536870912, 2952790016, 202506752, 139264, 402653184, 4261412864, 4227922944, 2147532800, 61440, 3758096384, 117440512, 65280, 3233808384, 3221225472, 4294965248, 32768, 57152, 67108864, 4293918720, 4290772992, 25165824, 4160749568, 57344, 4278190080, 4227907584, 65520, 4026531840, 49152, 4227858432, 4294836224, 63488, 1073741824, 4294967040, 251658240, 196608, 12582912, 2097152, 65408, 64512, 417808, 4227923712, 50331648, 65472, 4294967168, 4294966784, 16, 4294917120, 2080374784, 4294963200, 4096, 6144, 4292870144, 65532]);

const CharTypes = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    512 | 524288,
    0,
    0,
    512 | 1048576,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1 | 2,
    0,
    0,
    0,
    0,
    0,
    0,
    32768,
    0,
    32768,
    0,
    0,
    2 | 1024 | 8192 | 2048 | 4096,
    2 | 1024 | 8192 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 2048 | 4096,
    2 | 1024 | 262144 | 4096,
    2 | 1024 | 262144 | 4096,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1 | 2 | 4096,
    1 | 2 | 4096,
    1 | 2 | 4096,
    1 | 2 | 4096,
    1 | 2 | 4096,
    1 | 2 | 4096,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    1 | 2,
    0,
    131072 | 1,
    0,
    0,
    1 | 2 | 2097152,
    0,
    1 | 2 | 64 | 4096,
    1 | 2 | 64 | 4096,
    1 | 2 | 64 | 4096,
    1 | 2 | 64 | 4096,
    1 | 2 | 64 | 4096,
    1 | 2 | 64 | 4096,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    1 | 2 | 64,
    0,
    0,
    0,
    0,
    0
];
function isIdentifierStart(code) {
    return code <= 0x7F
        ? CharTypes[code] & 1
        : (unicodeLookup[(code >>> 5) + 34816] >>> code) & 31 & 1;
}
function isIdentifierPart(code) {
    return code <= 0x7F
        ? CharTypes[code] & 2
        : (unicodeLookup[(code >>> 5) + 0] >>> code) & 31 & 1 || (code === 8204 || code === 8205);
}

const errorMessages = {
    [0]: 'Unexpected token',
    [28]: "Unexpected token '%0'",
    [1]: 'Octal escape sequences are not allowed in strict mode',
    [2]: 'Octal escape sequences are not allowed in template strings',
    [3]: 'Unexpected token `#`',
    [4]: 'Illegal Unicode escape sequence',
    [5]: 'Invalid code point %0',
    [6]: 'Invalid hexadecimal escape sequence',
    [8]: 'Octal literals are not allowed in strict mode',
    [7]: 'Decimal integer literals with a leading zero are forbidden in strict mode',
    [9]: 'Expected number in radix %0',
    [153]: 'Invalid left-hand side assignment to a destructible right-hand side',
    [10]: 'Non-number found after exponent indicator',
    [11]: 'Invalid BigIntLiteral',
    [12]: 'No identifiers allowed directly after numeric literal',
    [13]: 'Escapes \\8 or \\9 are not syntactically valid escapes',
    [14]: 'Unterminated string literal',
    [15]: 'Unterminated template literal',
    [16]: 'Multiline comment was not closed properly',
    [17]: 'The identifier contained dynamic unicode escape that was not closed',
    [18]: "Illegal character '%0'",
    [19]: 'Missing hexadecimal digits',
    [20]: 'Invalid implicit octal',
    [21]: 'Invalid line break in string literal',
    [22]: 'Only unicode escapes are legal in identifier names',
    [23]: "Expected '%0'",
    [24]: 'Invalid left-hand side in assignment',
    [25]: 'Invalid left-hand side in async arrow',
    [26]: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
    [27]: 'Member access on super must be in a method',
    [29]: 'Await expression not allowed in formal parameter',
    [30]: 'Yield expression not allowed in formal parameter',
    [31]: 'Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses',
    [127]: 'Async functions can only be declared at the top level or inside a block',
    [32]: 'Unterminated regular expression',
    [33]: 'Unexpected regular expression flag',
    [34]: "Duplicate regular expression flag '%0'",
    [35]: '%0 functions must have exactly %1 argument%2',
    [36]: 'Setter function argument must not be a rest parameter',
    [37]: '%0 declaration must have a name in this context',
    [38]: 'Function name may not be eval or arguments in strict mode',
    [39]: 'The rest operator is missing an argument',
    [40]: 'Cannot assign to lhs, not destructible with this initializer',
    [41]: 'A getter cannot be a generator',
    [42]: 'A computed property name must be followed by a colon or paren',
    [138]: 'Object literal keys that are strings or numbers must be a method or have a colon',
    [44]: 'Found `* async x(){}` but this should be `async * x(){}`',
    [43]: 'Getters and setters can not be generators',
    [45]: "'%0' can not be generator method",
    [46]: "No line break is allowed after '=>'",
    [47]: 'Illegal async arrow function parameter list',
    [48]: 'Illegal arrow function parameter list',
    [49]: 'The left-hand side of the arrow can only be destructed through assignment',
    [50]: 'The binding declaration is not destructible',
    [51]: 'Async arrow can not be followed by new expression',
    [52]: "Classes may not have a static property named 'prototype'",
    [53]: 'Class constructor may not be a %0',
    [54]: 'Duplicate constructor method in class',
    [55]: 'Invalid increment/decrement operand',
    [56]: 'Invalid use of `new` keyword on an increment/decrement expression',
    [57]: '`=>` is an invalid assignment target',
    [58]: 'Rest element may not have a trailing comma',
    [59]: 'Missing initializer in %0 declaration',
    [60]: "'for-%0' loop head declarations can not have an initializer",
    [61]: 'Invalid left-hand side in for-%0 loop: Must have a single binding',
    [126]: 'Invalid left-hand side in for-loop',
    [62]: 'Invalid shorthand property initializer',
    [63]: 'Property name __proto__ appears more than once in object literal',
    [64]: 'Let is disallowed as a lexically bound name',
    [65]: "Invalid use of '%0' inside new expression",
    [66]: "Illegal 'use strict' directive in function with non-simple parameter list",
    [67]: 'Identifier "let" disallowed as left-hand side expression in strict mode',
    [68]: 'Illegal continue statement',
    [69]: 'Illegal break statement',
    [70]: 'Cannot have `let[...]` as a var name in strict mode',
    [71]: 'Invalid destructuring assignment target',
    [72]: 'Rest parameter may not have a default initializer',
    [73]: 'The rest argument must the be last parameter',
    [74]: 'Invalid rest argument',
    [76]: 'In strict mode code, functions can only be declared at top level or inside a block',
    [77]: 'In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement',
    [78]: 'Without web compability enabled functions can not be declared at top level, inside a block, or as the body of an if statement',
    [79]: "Class declaration can't appear in single-statement context",
    [80]: "'await' may not be used as an identifier in this context",
    [81]: 'Invalid left-hand side in for-%0',
    [82]: 'Invalid assignment in for-%0',
    [83]: 'for await (... of ...) is only valid in async functions and async generators',
    [84]: 'The first token after the template expression should be a continuation of the template',
    [86]: '`let` declaration not allowed here and `let` cannot be a regular var name in strict mode',
    [85]: '`let \n [` is a restricted production at the start of a statement',
    [87]: 'Catch clause requires exactly one parameter, not more (and no trailing comma)',
    [88]: 'Catch clause parameter does not support default values',
    [89]: 'Missing catch or finally after try',
    [90]: 'More than one default clause in switch statement',
    [91]: 'Illegal newline after throw',
    [92]: 'Strict mode code may not include a with statement',
    [93]: 'Illegal return statement',
    [94]: 'The for-header left hand side binding declaration is not destructible',
    [95]: 'new.target only allowed within functions',
    [96]: 'Keywords must be written literally, without embedded escapes',
    [97]: "''#' not followed by identifier",
    [98]: '`Static` is a reserved word in strict mode',
    [100]: 'The use of a future reserved word for an identifier is invalid. The identifier name is reserved in strict mode',
    [105]: 'The use of a keyword for an identifier is invalid',
    [104]: "Can not use 'let' as a class name",
    [103]: 'Can not use `let` when binding through `let` or `const`',
    [102]: 'Can not use `let` as variable name in strict mode',
    [99]: "'%0' may not be used as an identifier in this context",
    [101]: 'Await is only valid in async functions',
    [106]: 'The %0 keyword can only be used with the module goal',
    [107]: 'Unicode codepoint must not be greater than 0x10FFFF',
    [108]: '%0 source must be string',
    [109]: 'Only a identifier can be used to indicate alias',
    [110]: "Only '*' or '{...}' can be imported after default",
    [111]: 'Trailing decorator may be followed by method',
    [112]: "Decorators can't be used with a constructor",
    [113]: "'%0' may not be used as an identifier in this context",
    [114]: 'HTML comments are only allowed with web compability (Annex B)',
    [115]: "The identifier 'let' must not be in expression position in strict mode",
    [116]: 'Cannot assign to `eval` and `arguments` in strict mode',
    [117]: "The left-hand side of a for-of loop may not start with 'let'",
    [118]: 'Block body arrows can not be immediately invoked without a group',
    [119]: 'Block body arrows can not be immediately accessed without a group',
    [120]: 'Unexpected strict mode reserved word',
    [121]: 'Unexpected eval or arguments in strict mode',
    [122]: 'Decorators must not be followed by a semicolon',
    [123]: 'A statement can not start with object destructuring assignment',
    [124]: 'Calling delete on expression not allowed in strict mode',
    [125]: 'Pattern can not have a tail',
    [128]: 'Can not have a `yield` expression on the left side of a ternary',
    [129]: 'An arrow function can not have a postfix update operator',
    [130]: 'Invalid object literal key character after generator star',
    [131]: 'Private fields can not be deleted',
    [133]: 'Classes may not have a field called constructor',
    [132]: 'Classes may not have a private element named constructor',
    [134]: 'A class field initializer may not contain arguments',
    [135]: 'Generators can only be declared at the top level or inside a block',
    [136]: 'Async methods are a restricted production and cannot have a newline following it',
    [137]: 'Unexpected character after object literal property name',
    [139]: 'Invalid key token',
    [140]: "Label '%0' has already been declared",
    [141]: 'continue statement must be nested within an iteration statement',
    [142]: "Undefined label '%0'",
    [143]: 'Trailing comma is disallowed inside import(...) arguments',
    [144]: 'import() requires exactly one argument',
    [145]: 'Cannot use new with import(...)',
    [146]: '... is not allowed in import()',
    [147]: "Expected '=>'",
    [148]: "Duplicate binding '%0'",
    [149]: "Cannot export a duplicate name '%0'",
    [152]: 'Duplicate %0 for-binding',
    [150]: "Exported binding '%0' needs to refer to a top-level declared variable",
    [151]: 'Unexpected private field',
    [155]: 'Numeric separators are not allowed at the end of numeric literals',
    [154]: 'Only one underscore is allowed as numeric separator'
};
class ParseError extends SyntaxError {
    constructor(startindex, line, column, type, ...params) {
        const message = '[' + line + ':' + column + ']: ' + errorMessages[type].replace(/%(\d+)/g, (_, i) => params[i]);
        super(`${message}`);
        this.index = startindex;
        this.line = line;
        this.column = column;
        this.description = message;
    }
}
function report(parser, type, ...params) {
    throw new ParseError(parser.index, parser.line, parser.column, type, ...params);
}
function reportAt(index, line, column, type, ...params) {
    throw new ParseError(index, line, column, type, ...params);
}

const TokenLookup = [
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    124,
    135,
    124,
    124,
    130,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    129,
    124,
    16842797,
    134283267,
    131,
    208897,
    8456756,
    8455492,
    134283267,
    67174411,
    1073741840,
    8456755,
    25233711,
    -1073741806,
    25233712,
    67108877,
    8456757,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    134283266,
    21,
    -2146435055,
    8455999,
    -2143289315,
    8456000,
    22,
    133,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    69271571,
    136,
    20,
    8455238,
    208897,
    132,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    208897,
    2162700,
    8454981,
    -2146435057,
    16842798,
    129
];
function nextToken(parser, context) {
    parser.flags = (parser.flags | 1) ^ 1;
    parser.startIndex = parser.index;
    parser.startColumn = parser.column;
    parser.startLine = parser.line;
    parser.token = scanSingleToken(parser, context, 0);
}
function scanSingleToken(parser, context, state) {
    const isStartOfLine = parser.index === 0;
    while (parser.index < parser.end) {
        parser.tokenIndex = parser.index;
        parser.colPos = parser.column;
        parser.linePos = parser.line;
        const first = parser.nextCP;
        if (first <= 0x7e) {
            const token = TokenLookup[first];
            switch (token) {
                case 67174411:
                case 1073741840:
                case 2162700:
                case -2146435057:
                case 69271571:
                case 20:
                case 22:
                case 21:
                case -2146435055:
                case -1073741806:
                case 16842798:
                case 133:
                case 129:
                    nextCP(parser);
                    return token;
                case 124:
                    nextCP(parser);
                    break;
                case 130:
                    state |= 1 | 4;
                    scanNewLine(parser);
                    break;
                case 135:
                    consumeLineFeed(parser, (state & 4) !== 0);
                    state = (state | 4 | 1) ^ 4;
                    break;
                case 208897:
                    return scanIdentifier(parser, context);
                case 134283266:
                    return scanNumber(parser, context, 0);
                case 134283267:
                    return scanString(parser, context);
                case 132:
                    return scanTemplate(parser, context);
                case 136:
                    return scanUnicodeIdentifier(parser, context);
                case 131:
                    return scanPrivateName(parser);
                case 16842797:
                    if (nextCP(parser) !== 61) {
                        return 16842797;
                    }
                    if (nextCP(parser) !== 61) {
                        return 8455740;
                    }
                    nextCP(parser);
                    return 8455738;
                case 8456756:
                    if (nextCP(parser) !== 61)
                        return 8456756;
                    nextCP(parser);
                    return 4194342;
                case 8456755: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 8456755;
                    const next = parser.nextCP;
                    if (next === 61) {
                        nextCP(parser);
                        return 4194340;
                    }
                    if (next !== 42)
                        return 8456755;
                    if (nextCP(parser) !== 61)
                        return 8457014;
                    nextCP(parser);
                    return 4194337;
                }
                case 8455238:
                    if (nextCP(parser) !== 61)
                        return 8455238;
                    nextCP(parser);
                    return 4194343;
                case 25233711: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 25233711;
                    if (parser.nextCP === 43) {
                        nextCP(parser);
                        return 33619995;
                    }
                    if (parser.nextCP === 61) {
                        nextCP(parser);
                        return 4194338;
                    }
                    return 25233711;
                }
                case 25233712: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 25233712;
                    const next = parser.nextCP;
                    if (next === 45) {
                        nextCP(parser);
                        if ((context & 2048) === 0 &&
                            (state & 1 || isStartOfLine) &&
                            parser.nextCP === 62) {
                            if ((context & 256) === 0)
                                report(parser, 114);
                            state = skipSingleLineComment(parser, state);
                            continue;
                        }
                        return 33619996;
                    }
                    if (next === 61) {
                        nextCP(parser);
                        return 4194339;
                    }
                    return 25233712;
                }
                case 8456757: {
                    nextCP(parser);
                    if (parser.index < parser.end) {
                        const ch = parser.nextCP;
                        if (ch === 47) {
                            nextCP(parser);
                            state = skipSingleLineComment(parser, state);
                            continue;
                        }
                        else if (ch === 42) {
                            nextCP(parser);
                            state = skipMultiLineComment(parser, state);
                            continue;
                        }
                        else if (context & 32768) {
                            return scanRegularExpression(parser, context);
                        }
                        else if (ch === 61) {
                            nextCP(parser);
                            return 4259877;
                        }
                    }
                    return 8456757;
                }
                case 8455999:
                    const next = nextCP(parser);
                    if (parser.index < parser.end) {
                        if (next === 60) {
                            if (parser.index < parser.end && nextCP(parser) === 61) {
                                nextCP(parser);
                                return 4194334;
                            }
                            else {
                                return 8456257;
                            }
                        }
                        else if (next === 61) {
                            nextCP(parser);
                            return 8455997;
                        }
                        else if (next === 33) {
                            if ((context & 2048) === 0 &&
                                parser.source.charCodeAt(parser.index + 1) === 45 &&
                                parser.source.charCodeAt(parser.index + 2) === 45) {
                                state = skipSingleLineComment(parser, state);
                                continue;
                            }
                        }
                    }
                    return 8455999;
                case -2143289315: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return -2143289315;
                    const next = parser.nextCP;
                    if (next === 61) {
                        if (nextCP(parser) === 61) {
                            nextCP(parser);
                            return 8455737;
                        }
                        else {
                            return 8455739;
                        }
                    }
                    else if (next === 62) {
                        nextCP(parser);
                        return 10;
                    }
                    return -2143289315;
                }
                case 8454981: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 8454981;
                    const next = parser.nextCP;
                    if (next === 124) {
                        nextCP(parser);
                        return 8978744;
                    }
                    else if (next === 61) {
                        nextCP(parser);
                        return 4194344;
                    }
                    return 8454981;
                }
                case 8456000: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 8456000;
                    const next = parser.nextCP;
                    if (next === 61) {
                        nextCP(parser);
                        return 8455998;
                    }
                    if (next !== 62)
                        return 8456000;
                    nextCP(parser);
                    if (parser.index < parser.end) {
                        const next = parser.nextCP;
                        if (next === 62) {
                            if (nextCP(parser) === 61) {
                                nextCP(parser);
                                return 4194336;
                            }
                            else {
                                return 8456259;
                            }
                        }
                        else if (next === 61) {
                            nextCP(parser);
                            return 4194335;
                        }
                    }
                    return 8456258;
                }
                case 8455492: {
                    nextCP(parser);
                    if (parser.index >= parser.end)
                        return 8455492;
                    const next = parser.nextCP;
                    if (next === 38) {
                        nextCP(parser);
                        return 8978999;
                    }
                    if (next === 61) {
                        nextCP(parser);
                        return 4194345;
                    }
                    return 8455492;
                }
                case 67108877:
                    nextCP(parser);
                    if ((CharTypes[parser.nextCP] & 1024) !== 0)
                        return scanNumber(parser, context, 1);
                    if (parser.nextCP === 46) {
                        if (nextCP(parser) === 46) {
                            nextCP(parser);
                            return 14;
                        }
                    }
                    return 67108877;
                default:
            }
        }
        else {
            if ((first ^ 8232) <= 1) {
                state = (state | 4 | 1) ^ 4;
                scanNewLine(parser);
                continue;
            }
            if (isIDStart(first) || consumeMultiUnitCodePoint(parser, first)) {
                parser.tokenValue = '';
                return scanIdentifierSlowCase(parser, context, 0, 0);
            }
            if (isExoticECMAScriptWhitespace(first)) {
                nextCP(parser);
                continue;
            }
            report(parser, 18, fromCodePoint(first));
        }
    }
    return 1048576;
}

function skipHashBang(parser) {
    if (parser.nextCP === 35 && parser.source.charCodeAt(parser.index + 1) === 33) {
        skipSingleLineComment(parser, 0);
    }
}
function skipSingleLineComment(parser, state) {
    while (parser.index < parser.end) {
        if (CharTypes[parser.nextCP] & 512 || (parser.nextCP ^ 8232) <= 1) {
            state = (state | 4 | 1) ^ 4;
            scanNewLine(parser);
            return state;
        }
        nextCP(parser);
    }
    return state;
}
function skipMultiLineComment(parser, state) {
    while (parser.index < parser.end) {
        while (parser.nextCP === 42) {
            if (nextCP(parser) === 47) {
                nextCP(parser);
                return state;
            }
        }
        if (parser.nextCP === 13) {
            state |= 1 | 4;
            scanNewLine(parser);
        }
        else if (parser.nextCP === 10) {
            consumeLineFeed(parser, (state & 4) !== 0);
            state = (state | 4 | 1) ^ 4;
        }
        else if ((parser.nextCP ^ 8232) <= 1) {
            state = (state | 4 | 1) ^ 4;
            scanNewLine(parser);
        }
        else {
            nextCP(parser);
        }
    }
    report(parser, 16);
}

function nextCP(parser) {
    parser.column++;
    return (parser.nextCP = parser.source.charCodeAt(++parser.index));
}
function consumeMultiUnitCodePoint(parser, hi) {
    if ((hi & 0xfc00) !== 55296)
        return false;
    const lo = parser.source.charCodeAt(parser.index + 1);
    if ((lo & 0xfc00) !== 0xdc00)
        return false;
    hi = 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
    if (((unicodeLookup[(hi >>> 5) + 0] >>> hi) & 31 & 1) === 0) {
        report(parser, 18, fromCodePoint(hi));
    }
    parser.index++;
    parser.column++;
    parser.nextCP = hi;
    return true;
}
function consumeLineFeed(parser, lastIsCR) {
    parser.nextCP = parser.source.charCodeAt(++parser.index);
    parser.flags |= 1;
    if (!lastIsCR) {
        parser.column = 0;
        parser.line++;
    }
}
function scanNewLine(parser) {
    parser.flags |= 1;
    parser.nextCP = parser.source.charCodeAt(++parser.index);
    parser.column = 0;
    parser.line++;
}
function isExoticECMAScriptWhitespace(code) {
    return (code === 160 ||
        code === 65279 ||
        code === 133 ||
        code === 5760 ||
        (code >= 8192 && code <= 8203) ||
        code === 8239 ||
        code === 8287 ||
        code === 12288 ||
        code === 65519);
}
function fromCodePoint(codePoint) {
    return codePoint <= 65535
        ? String.fromCharCode(codePoint)
        : String.fromCharCode(codePoint >>> 10) + String.fromCharCode(codePoint & 0x3ff);
}
function toHex(code) {
    return code < 65 ? code - 48 : (code - 65 + 10) & 0xf;
}

const KeywordDescTable = [
    'end of source',
    'identifier', 'number', 'string', 'regular expression',
    'false', 'true', 'null',
    'template continuation', 'template tail',
    '=>', '(', '{', '.', '...', '}', ')', ';', ',', '[', ']', ':', '?', '\'', '"', '</', '/>',
    '++', '--',
    '=', '<<=', '>>=', '>>>=', '**=', '+=', '-=', '*=', '/=', '%=', '^=', '|=',
    '&=',
    'typeof', 'delete', 'void', '!', '~', '+', '-', 'in', 'instanceof', '*', '%', '/', '**', '&&',
    '||', '===', '!==', '==', '!=', '<=', '>=', '<', '>', '<<', '>>', '>>>', '&', '|', '^',
    'var', 'let', 'const',
    'break', 'case', 'catch', 'class', 'continue', 'debugger', 'default', 'do', 'else', 'export',
    'extends', 'finally', 'for', 'function', 'if', 'import', 'new', 'return', 'super', 'switch',
    'this', 'throw', 'try', 'while', 'with',
    'implements', 'interface', 'package', 'private', 'protected', 'public', 'static', 'yield',
    'as', 'async', 'await', 'constructor', 'get', 'set', 'from', 'of',
    'enum', 'eval', 'arguments', 'escaped reserved', 'escaped future reserved', 'reserved if strict', '#',
    'BigIntLiteral', 'WhiteSpace', 'Illegal', 'LineTerminator', 'PrivateField', 'Template', '@', 'target'
];
const descKeywordTable = Object.create(null, {
    this: { value: 86110 },
    function: { value: 86103 },
    if: { value: 20568 },
    return: { value: 20571 },
    var: { value: 268521543 },
    else: { value: 20562 },
    for: { value: 20566 },
    new: { value: 86106 },
    in: { value: 8738609 },
    typeof: { value: 16863274 },
    while: { value: 20577 },
    case: { value: 20555 },
    break: { value: 20554 },
    try: { value: 20576 },
    catch: { value: 20556 },
    delete: { value: 16863275 },
    throw: { value: 86111 },
    switch: { value: 86109 },
    continue: { value: 20558 },
    default: { value: 20560 },
    instanceof: { value: 8476466 },
    do: { value: 20561 },
    void: { value: 16863276 },
    finally: { value: 20565 },
    async: { value: 143468 },
    await: { value: 209005 },
    class: { value: 86093 },
    const: { value: 268521545 },
    constructor: { value: 12398 },
    debugger: { value: 20559 },
    export: { value: 20563 },
    extends: { value: 20564 },
    false: { value: 86021 },
    from: { value: 12401 },
    get: { value: 12399 },
    implements: { value: 36963 },
    import: { value: 86105 },
    interface: { value: 36964 },
    let: { value: 268677192 },
    null: { value: 86023 },
    of: { value: 274546 },
    package: { value: 36965 },
    private: { value: 36966 },
    protected: { value: 36967 },
    public: { value: 36968 },
    set: { value: 12400 },
    static: { value: 36969 },
    super: { value: 86108 },
    true: { value: 86022 },
    with: { value: 20578 },
    yield: { value: 241770 },
    enum: { value: 20595 },
    eval: { value: 537079924 },
    as: { value: 12395 },
    arguments: { value: 537079925 },
    target: { value: 143494 },
});

function scanIdentifier(parser, context) {
    const canBeKeyword = CharTypes[parser.nextCP] & 64;
    while ((CharTypes[nextCP(parser)] & 2) !== 0) { }
    parser.tokenValue = parser.source.slice(parser.tokenIndex, parser.index);
    if ((CharTypes[parser.nextCP] & 131072) === 0 && parser.nextCP < 0x7e) {
        return descKeywordTable[parser.tokenValue] || 208897;
    }
    return scanIdentifierSlowCase(parser, context, 0, canBeKeyword);
}
function scanUnicodeIdentifier(parser, context) {
    const cookedChar = scanIdentifierUnicodeEscape(parser);
    if (!isIdentifierPart(cookedChar))
        report(parser, 4);
    parser.tokenValue = fromCodePoint(cookedChar);
    return scanIdentifierSlowCase(parser, context, 1, CharTypes[cookedChar] & 64);
}
function scanIdentifierSlowCase(parser, context, hasEscape, canBeKeyword) {
    let start = parser.index;
    while (parser.index < parser.end) {
        if (parser.nextCP === 92) {
            parser.tokenValue += parser.source.slice(start, parser.index);
            hasEscape = 1;
            const code = scanIdentifierUnicodeEscape(parser);
            if (!isIdentifierPart(code))
                report(parser, 4);
            canBeKeyword = canBeKeyword && CharTypes[code] & 64;
            parser.tokenValue += fromCodePoint(code);
            start = parser.index;
        }
        else if (isIdentifierPart(parser.nextCP) || consumeMultiUnitCodePoint(parser, parser.nextCP)) {
            nextCP(parser);
        }
        else {
            break;
        }
    }
    if (parser.index <= parser.end) {
        parser.tokenValue += parser.source.slice(start, parser.index);
    }
    const length = parser.tokenValue.length;
    if (canBeKeyword && (length >= 2 && length <= 11)) {
        const keyword = descKeywordTable[parser.tokenValue];
        return keyword === void 0
            ? 208897
            : keyword === 241770 || !hasEscape
                ? keyword
                : context & 1024 && (keyword === 268677192 || keyword === 36969)
                    ? 143479
                    : (keyword & 36864) === 36864
                        ? context & 1024
                            ? 143479
                            : keyword
                        : 143478;
    }
    return 208897;
}
function scanPrivateName(parser) {
    if (!isIdentifierStart(nextCP(parser)))
        report(parser, 97);
    return 131;
}
function scanIdentifierUnicodeEscape(parser) {
    if (parser.index + 5 < parser.end && parser.source.charCodeAt(parser.index + 1) === 117) {
        parser.nextCP = parser.source.charCodeAt((parser.index += 2));
        return scanUnicodeEscapeValue(parser);
    }
    report(parser, 4);
}
function scanUnicodeEscapeValue(parser) {
    let codePoint = 0;
    const char = parser.nextCP;
    if (char === 123) {
        const startPos = parser.index;
        while (CharTypes[nextCP(parser)] & 4096) {
            codePoint = (codePoint << 4) | toHex(parser.nextCP);
            if (codePoint > 1114111)
                report(parser, 107);
        }
        if (codePoint < 1 || parser.nextCP !== 125) {
            reportAt(startPos, parser.line, startPos - 1, 6);
        }
        nextCP(parser);
        return codePoint;
    }
    if ((CharTypes[char] & 4096) === 0)
        report(parser, 6);
    const char2 = parser.source.charCodeAt(parser.index + 1);
    if ((CharTypes[char2] & 4096) === 0)
        report(parser, 6);
    const char3 = parser.source.charCodeAt(parser.index + 2);
    if ((CharTypes[char3] & 4096) === 0)
        report(parser, 6);
    const char4 = parser.source.charCodeAt(parser.index + 3);
    if ((CharTypes[char4] & 4096) === 0)
        report(parser, 6);
    codePoint = (toHex(char) << 12) | (toHex(char2) << 8) | (toHex(char3) << 4) | toHex(char4);
    parser.nextCP = parser.source.charCodeAt((parser.index += 4));
    return codePoint;
}

function scanString(parser, context) {
    const quote = parser.nextCP;
    const { index: start } = parser;
    let ret = '';
    let ch = nextCP(parser);
    let marker = parser.index;
    while ((CharTypes[ch] & 512) === 0) {
        if (ch === quote) {
            ret += parser.source.slice(marker, parser.index);
            nextCP(parser);
            if (context & 512)
                parser.tokenRaw = parser.source.slice(start, parser.index);
            parser.tokenValue = ret;
            return 134283267;
        }
        if ((ch & 8) === 8 && ch === 92) {
            ret += parser.source.slice(marker, parser.index);
            const ch = nextCP(parser);
            if (ch > 0x7e) {
                ret += fromCodePoint(ch);
            }
            else {
                const code = parseEscape(parser, context, ch);
                if (code >= 0)
                    ret += fromCodePoint(code);
                else
                    handleStringError(parser, code, 0);
            }
            marker = parser.index + 1;
        }
        if (parser.index >= parser.end)
            report(parser, 14);
        ch = nextCP(parser);
    }
    report(parser, 14);
}
function parseEscape(parser, context, first) {
    switch (first) {
        case 98:
            return 8;
        case 102:
            return 12;
        case 114:
            return 13;
        case 110:
            return 10;
        case 116:
            return 9;
        case 118:
            return 11;
        case 13: {
            if (parser.index < parser.end) {
                if (parser.nextCP === 10) {
                    parser.index = parser.index + 1;
                    parser.nextCP = parser.source.charCodeAt(parser.index);
                }
            }
        }
        case 10:
        case 8232:
        case 8233:
            parser.column = -1;
            parser.line++;
            return -1;
        case 48:
        case 49:
        case 50:
        case 51: {
            let code = first - 48;
            let index = parser.index + 1;
            let column = parser.column + 1;
            if (index < parser.end) {
                const next = parser.source.charCodeAt(index);
                if ((CharTypes[next] & 2048) === 0) {
                    if ((code !== 0 || CharTypes[next] & 262144) && context & 1024)
                        return -2;
                }
                else if (context & 1024) {
                    return -2;
                }
                else {
                    parser.nextCP = next;
                    code = (code << 3) | (next - 48);
                    index++;
                    column++;
                    if (index < parser.end) {
                        const next = parser.source.charCodeAt(index);
                        if (CharTypes[next] & 2048) {
                            parser.nextCP = next;
                            code = (code << 3) | (next - 48);
                            index++;
                            column++;
                        }
                    }
                    parser.flags |= 64;
                    parser.index = index - 1;
                    parser.column = column - 1;
                }
            }
            return code;
        }
        case 52:
        case 53:
        case 54:
        case 55: {
            if (context & 1024)
                return -2;
            let code = first - 48;
            const index = parser.index + 1;
            const column = parser.column + 1;
            if (index < parser.end) {
                const next = parser.source.charCodeAt(index);
                if (CharTypes[next] & 2048) {
                    code = (code << 3) | (next - 48);
                    parser.nextCP = next;
                    parser.index = index;
                    parser.column = column;
                }
            }
            parser.flags |= 64;
            return code;
        }
        case 56:
        case 57:
            return -3;
        case 120: {
            const ch1 = nextCP(parser);
            if ((CharTypes[ch1] & 4096) === 0)
                return -4;
            const hi = toHex(ch1);
            const ch2 = nextCP(parser);
            if ((CharTypes[ch2] & 4096) === 0)
                return -4;
            const lo = toHex(ch2);
            return (hi << 4) | lo;
        }
        case 117: {
            const ch = nextCP(parser);
            if (parser.nextCP === 123) {
                let code = 0;
                while ((CharTypes[nextCP(parser)] & 4096) !== 0) {
                    code = (code << 4) | toHex(parser.nextCP);
                    if (code > 1114111)
                        return -5;
                }
                if (parser.nextCP < 1 || parser.nextCP !== 125) {
                    return -4;
                }
                return code;
            }
            else {
                if ((CharTypes[ch] & 4096) === 0)
                    return -4;
                const c2 = parser.source.charCodeAt(parser.index + 1);
                if ((CharTypes[c2] & 4096) === 0)
                    return -4;
                const c3 = parser.source.charCodeAt(parser.index + 2);
                if ((CharTypes[c3] & 4096) === 0)
                    return -4;
                const c4 = parser.source.charCodeAt(parser.index + 3);
                if ((CharTypes[c4] & 4096) === 0)
                    return -4;
                parser.index += 3;
                parser.column += 3;
                return (toHex(ch) << 12) | (toHex(c2) << 8) | (toHex(c3) << 4) | toHex(c4);
            }
        }
        default:
            return nextUnicodeChar(parser);
    }
}
function handleStringError(state, code, isTemplate) {
    switch (code) {
        case -1:
            return;
        case -2:
            report(state, isTemplate ? 2 : 1);
        case -3:
            report(state, 13);
        case -4:
            report(state, 6);
        case -5:
            report(state, 107);
        default:
    }
}
function nextUnicodeChar(parser) {
    let { index } = parser;
    const hi = parser.source.charCodeAt(index++);
    if (hi < 0xd800 || hi > 0xdbff)
        return hi;
    if (index === parser.source.length)
        return hi;
    const lo = parser.source.charCodeAt(index);
    if (lo < 0xdc00 || lo > 0xdfff)
        return hi;
    return ((hi & 0x3ff) << 10) | (lo & 0x3ff) | 0x10000;
}

function scanNumber(parser, context, isFloat) {
    let kind = 16;
    let char = parser.nextCP;
    let value = 0;
    let digit = 9;
    let atStart = !isFloat;
    let digits = 0;
    let allowSeparator = 0;
    if (isFloat) {
        value = '.' + scanDecimalDigitsOrSeparator(parser, char);
        char = parser.nextCP;
    }
    else {
        if (char === 48) {
            char = nextCP(parser);
            if ((char | 32) === 120) {
                kind = 8;
                char = nextCP(parser);
                while (CharTypes[char] & (4096 | 2097152)) {
                    if (char === 95) {
                        if (!allowSeparator) {
                            report(parser, 154);
                        }
                        allowSeparator = 0;
                        char = nextCP(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 0x10 + toHex(char);
                    digits++;
                    char = nextCP(parser);
                }
                if (digits < 1)
                    report(parser, 19);
                if (!allowSeparator)
                    report(parser, 155);
            }
            else if ((char | 32) === 111) {
                kind = 4;
                char = nextCP(parser);
                while (CharTypes[char] & (2048 | 2097152)) {
                    if (char === 95) {
                        if (!allowSeparator) {
                            report(parser, 154);
                        }
                        allowSeparator = 0;
                        char = nextCP(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 8 + (char - 48);
                    digits++;
                    char = nextCP(parser);
                }
                if (digits < 1)
                    report(parser, 9, `${8}`);
                if (!allowSeparator)
                    report(parser, 155);
            }
            else if ((char | 32) === 98) {
                kind = 2;
                char = nextCP(parser);
                while (CharTypes[char] & (8192 | 2097152)) {
                    if (char === 95) {
                        if (!allowSeparator) {
                            report(parser, 154);
                        }
                        allowSeparator = 0;
                        char = nextCP(parser);
                        continue;
                    }
                    allowSeparator = 1;
                    value = value * 2 + (char - 48);
                    digits++;
                    char = nextCP(parser);
                }
                if (digits < 1)
                    report(parser, 9, `${2}`);
                if (!allowSeparator)
                    report(parser, 155);
            }
            else if (CharTypes[char] & 2048) {
                if (context & 1024)
                    report(parser, 1);
                kind = 1;
                while (CharTypes[char] & 1024) {
                    if (CharTypes[char] & 262144) {
                        kind = 32;
                        atStart = false;
                        break;
                    }
                    value = value * 8 + (parser.nextCP - 48);
                    char = nextCP(parser);
                }
            }
            else if (CharTypes[char] & 262144) {
                if (context & 1024)
                    report(parser, 1);
                else
                    parser.flags = 64;
                kind = 32;
            }
            else if (char === 95) {
                report(parser, 0);
            }
        }
        if (kind & (16 | 32)) {
            if (atStart) {
                while (digit >= 0 && CharTypes[char] & (1024 | 2097152)) {
                    if (char === 95) {
                        char = nextCP(parser);
                        if (char === 95)
                            report(parser, 154);
                        allowSeparator = 1;
                        continue;
                    }
                    allowSeparator = 0;
                    value = 10 * value + (char - 48);
                    char = nextCP(parser);
                    --digit;
                }
                if (allowSeparator)
                    report(parser, 155);
                if (digit >= 0 && !isIdentifierStart(char) && char !== 46 && char !== 95) {
                    parser.tokenValue = value;
                    if (context & 512)
                        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
                    return 134283266;
                }
            }
            value += scanDecimalDigitsOrSeparator(parser, char);
            char = parser.nextCP;
            if (char === 46) {
                char = nextCP(parser);
                if (char === 95)
                    report(parser, 0);
                isFloat = 1;
                value += '.' + scanDecimalDigitsOrSeparator(parser, char);
                char = parser.nextCP;
            }
        }
    }
    const end = parser.index;
    let isBigInt = 0;
    if (char === 110) {
        if (isFloat)
            report(parser, 11);
        isBigInt = 1;
        char = nextCP(parser);
    }
    else {
        if ((parser.nextCP | 32) === 101) {
            char = nextCP(parser);
            if (CharTypes[char] & 32768) {
                char = nextCP(parser);
            }
            const preNumericPart = parser.index;
            if ((CharTypes[char] & 1024) < 1)
                report(parser, 10);
            value += parser.source.substring(end, preNumericPart) + scanDecimalDigitsOrSeparator(parser, char);
            char = parser.nextCP;
        }
    }
    if ((parser.index < parser.end && CharTypes[char] & 1024) || isIdentifierStart(char)) {
        report(parser, 12);
    }
    if (isBigInt) {
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
        parser.tokenValue = parseInt(value, 0xa);
        return 122;
    }
    parser.tokenValue =
        kind & (1 | 2 | 8 | 4)
            ? value
            : kind & 32
                ? parseFloat(parser.source.slice(parser.tokenIndex, parser.index))
                : +value;
    if (context & 512)
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    return 134283266;
}
function scanDecimalDigitsOrSeparator(parser, char) {
    let allowSeparator = 0;
    let start = parser.index;
    let ret = '';
    while (CharTypes[char] & (1024 | 2097152)) {
        if (char === 95) {
            const preUnderscoreIndex = parser.index;
            char = nextCP(parser);
            if (char === 95)
                report(parser, 154);
            allowSeparator = 1;
            ret += parser.source.substring(start, preUnderscoreIndex);
            start = parser.index;
            continue;
        }
        allowSeparator = 0;
        char = nextCP(parser);
    }
    if (allowSeparator)
        report(parser, 155);
    return ret + parser.source.substring(start, parser.index);
}

function scanTemplate(parser, context) {
    const { index: start } = parser;
    let tail = true;
    let ret = '';
    let ch = nextCP(parser);
    while (ch !== 96) {
        if (ch === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
            nextCP(parser);
            tail = false;
            break;
        }
        else if ((ch & 8) === 8 && ch === 92) {
            ch = nextCP(parser);
            if (ch > 0x7e) {
                ret += fromCodePoint(ch);
            }
            else {
                const code = parseEscape(parser, context | 1024, ch);
                if (code >= 0) {
                    ret += fromCodePoint(code);
                }
                else if (code !== -1 && context & 65536) {
                    ret = undefined;
                    ch = scanBadTemplate(parser, ch);
                    if (ch < 0) {
                        tail = false;
                    }
                    break;
                }
                else {
                    handleStringError(parser, code, 1);
                }
            }
        }
        else {
            if (ch === 13) {
                if (parser.index < parser.end && parser.source.charCodeAt(parser.index) === 10) {
                    ret += fromCodePoint(ch);
                    parser.nextCP = parser.source.charCodeAt(++parser.index);
                }
            }
            if (ch === 10 || ch === 8232 || ch === 8233) {
                parser.column = -1;
                parser.line++;
            }
            ret += fromCodePoint(ch);
        }
        if (parser.index >= parser.end)
            report(parser, 15);
        ch = nextCP(parser);
    }
    nextCP(parser);
    parser.tokenValue = ret;
    if (tail) {
        parser.tokenRaw = parser.source.slice(start + 1, parser.index - 1);
        return 67174409;
    }
    else {
        parser.tokenRaw = parser.source.slice(start + 1, parser.index - 2);
        return 67174408;
    }
}
function scanBadTemplate(parser, ch) {
    while (ch !== 96) {
        switch (ch) {
            case 36: {
                const index = parser.index + 1;
                if (index < parser.end && parser.source.charCodeAt(index) === 123) {
                    parser.index = index;
                    parser.column++;
                    return -ch;
                }
                break;
            }
            case 10:
            case 8232:
            case 8233:
                parser.column = -1;
                parser.line++;
            default:
        }
        if (parser.index >= parser.end)
            report(parser, 15);
        ch = nextCP(parser);
    }
    return ch;
}
function scanTemplateTail(parser, context) {
    if (parser.index >= parser.end)
        report(parser, 0);
    parser.index--;
    parser.column--;
    return scanTemplate(parser, context);
}

function scanRegularExpression(parser, context) {
    const bodyStart = parser.index;
    let preparseState = 0;
    loop: while (true) {
        const ch = parser.nextCP;
        nextCP(parser);
        if (preparseState & 1) {
            preparseState &= ~1;
        }
        else {
            switch (ch) {
                case 47:
                    if (!preparseState)
                        break loop;
                    else
                        break;
                case 92:
                    preparseState |= 1;
                    break;
                case 91:
                    preparseState |= 2;
                    break;
                case 93:
                    preparseState &= 1;
                    break;
                case 13:
                case 10:
                case 8232:
                case 8233:
                    report(parser, 32);
                default:
            }
        }
        if (parser.index >= parser.source.length) {
            return report(parser, 32);
        }
    }
    const bodyEnd = parser.index - 1;
    let mask = 0;
    const { index: flagStart } = parser;
    loop: while (isIdentifierPart(parser.nextCP)) {
        switch (parser.nextCP) {
            case 103:
                if (mask & 2)
                    report(parser, 34, 'g');
                mask |= 2;
                break;
            case 105:
                if (mask & 1)
                    report(parser, 34, 'i');
                mask |= 1;
                break;
            case 109:
                if (mask & 4)
                    report(parser, 34, 'm');
                mask |= 4;
                break;
            case 117:
                if (mask & 16)
                    report(parser, 34, 'g');
                mask |= 16;
                break;
            case 121:
                if (mask & 8)
                    report(parser, 34, 'y');
                mask |= 8;
                break;
            case 115:
                if (mask & 12)
                    report(parser, 34, 's');
                mask |= 12;
                break;
            default:
                report(parser, 33);
        }
        nextCP(parser);
    }
    const flags = parser.source.slice(flagStart, parser.index);
    const pattern = parser.source.slice(bodyStart, bodyEnd);
    parser.tokenRegExp = { pattern, flags };
    if (context & 512)
        parser.tokenRaw = parser.source.slice(parser.tokenIndex, parser.index);
    parser.tokenValue = validate(parser, pattern, flags);
    return 65540;
}
function validate(parser, pattern, flags) {
    try {
        RegExp(pattern);
    }
    catch (e) {
        report(parser, 32);
    }
    try {
        return new RegExp(pattern, flags);
    }
    catch (e) {
        return null;
    }
}

function initblockScope() {
    return {
        var: {},
        lexicalVariables: {},
        lexicals: { funcs: [] }
    };
}
function inheritScope(scope, type) {
    return {
        var: scope.var,
        lexicalVariables: {
            $: scope.lexicalVariables
        },
        lexicals: {
            $: scope.lexicals,
            type,
            funcs: []
        }
    };
}
function declareName(parser, context, scope, name, bindingType, dupeChecks, isVarDecl) {
    if (scope === null)
        return;
    const hashed = '$' + name;
    if (bindingType & 4) {
        let lex = scope.lexicals;
        while (lex !== undefined) {
            if (lex[hashed] !== undefined) {
                if (lex.type & 4) {
                    if (!isVarDecl || (context & 256) === 0) {
                        report(parser, 148, name);
                    }
                }
                else if (lex.type & 1) {
                    report(parser, 148, name);
                }
                else if ((lex.type & 16) === 0 &&
                    ((context & 256) === 0 ||
                        (scope.lexicals.funcs[hashed] & 2) === 0 ||
                        context & 1024))
                    report(parser, 148, name);
            }
            lex = lex['$'];
        }
        scope.var[hashed] = scope.var[hashed] ? 2 : 1;
        let lexicalVariables = scope.lexicalVariables;
        while (lexicalVariables !== undefined) {
            lexicalVariables[hashed] = 1;
            lexicalVariables = lexicalVariables['$'];
        }
    }
    else {
        const lex = scope.lexicals;
        if (dupeChecks) {
            const lexParent = scope.lexicals['$'];
            if (lexParent && lexParent.type & (16 | 4) && lexParent[hashed]) {
                report(parser, 148, name);
            }
            else if (scope.lexicalVariables[hashed]) {
                if ((context & 256) === 0 ||
                    (scope.lexicals.funcs[hashed] & 2) === 0 ||
                    (context & 1024) !== 0) {
                    report(parser, 148, name);
                }
            }
            if (lex[hashed] !== undefined &&
                ((context & 256) === 0 ||
                    (scope.lexicals.funcs[hashed] & 2) === 0 ||
                    context & 1024)) {
                report(parser, 148, name);
            }
        }
        lex[hashed] = lex[hashed] ? 2 : 1;
    }
}
function declareAndDedupe(parser, context, scope, name, type, isVarDecl) {
    declareName(parser, context, scope, name, type, 1, isVarDecl);
    if (scope === null)
        return;
    if (context & 256)
        scope.lexicals.funcs['$' + name] = 1;
}
function addFunctionName(parser, context, scope, name, type, isVarDecl) {
    declareName(parser, context, scope, name, type, 1, isVarDecl);
    if (context & 256 && !('$' + name in scope.lexicals.funcs)) {
        scope.lexicals.funcs['$' + name] = 2;
    }
}
function checkConflictingLexicalDeclarations(parser, context, scope, checkParent) {
    for (const key in scope.lexicals) {
        if (key[0] === '$' && key.length > 1) {
            if (scope.lexicals[key] > 1)
                report(parser, 148, key);
            if (checkParent) {
                if (scope.lexicals['$'] &&
                    scope.lexicals['$'].type & (16 | 4) &&
                    scope.lexicals['$'][key]) {
                    report(parser, 148, key.slice(1));
                }
                else if (((context & 256) === 0 ||
                    (context & 1024) !== 0 ||
                    !scope.lexicals.funcs[key]) &&
                    scope.lexicalVariables[key]) {
                    report(parser, 148, key.slice(1));
                }
            }
        }
    }
    return false;
}
function verifyArguments(parser, lex) {
    for (const key in lex) {
        if (key[0] === '$' && key.length > 1 && lex[key] > 1) {
            report(parser, 148, key.slice(1));
        }
    }
}
function updateExportsList(parser, name) {
    if (parser.exportedNames !== undefined && name !== '') {
        if (parser.exportedNames['$' + name]) {
            report(parser, 149, name);
        }
        parser.exportedNames['$' + name] = 2;
    }
}
function addBindingToExports(parser, name) {
    if (parser.exportedBindings !== undefined && name !== '') {
        parser.exportedBindings['$' + name] = 2;
    }
}

function consumeSemicolon(parser, context) {
    if ((parser.flags & 1) === 0 && (parser.token & 1048576) !== 1048576) {
        report(parser, 28, KeywordDescTable[parser.token & 255]);
    }
    consumeOpt(parser, context, -2146435055);
}
function optionalBit(parser, context, t) {
    if (parser.token !== t)
        return 0;
    nextToken(parser, context);
    return 1;
}
function consumeOpt(parser, context, t) {
    if (parser.token !== t)
        return false;
    nextToken(parser, context);
    return true;
}
function consume(parser, context, t) {
    if (parser.token !== t)
        report(parser, 23, KeywordDescTable[t & 255]);
    nextToken(parser, context);
}
function reinterpretToPattern(state, node) {
    switch (node.type) {
        case 'ArrayExpression':
            node.type = 'ArrayPattern';
            const elements = node.elements;
            for (let i = 0, n = elements.length; i < n; ++i) {
                const element = elements[i];
                if (element)
                    reinterpretToPattern(state, element);
            }
            return;
        case 'ObjectExpression':
            node.type = 'ObjectPattern';
            const properties = node.properties;
            for (let i = 0, n = properties.length; i < n; ++i) {
                reinterpretToPattern(state, properties[i]);
            }
            return;
        case 'AssignmentExpression':
            node.type = 'AssignmentPattern';
            if (node.operator !== '=')
                report(state, 71);
            delete node.operator;
            reinterpretToPattern(state, node.left);
            return;
        case 'Property':
            reinterpretToPattern(state, node.value);
            return;
        case 'SpreadElement':
            node.type = 'RestElement';
            reinterpretToPattern(state, node.argument);
        default:
    }
}
function validateBindingIdentifier(parser, context, type, t, skipEvalArgCheck) {
    if ((t & 4096) !== 4096)
        return;
    if (context & 1024) {
        if (t === 36969) {
            report(parser, 98);
        }
        if ((t & 36864) === 36864) {
            report(parser, 100);
        }
        if (!skipEvalArgCheck && (t & 537079808) === 537079808) {
            report(parser, 121);
        }
        if (t === 143479) {
            report(parser, 96);
        }
    }
    if ((t & 20480) === 20480) {
        report(parser, 105);
    }
    if (type & (8 | 16) && t === 268677192) {
        report(parser, 103);
    }
    if (context & (4194304 | 2048) && t === 209005) {
        report(parser, 101);
    }
    if (context & (2097152 | 1024) && t === 241770) {
        report(parser, 99, 'yield');
    }
    if (t === 143478) {
        report(parser, 96);
    }
}
function isStrictReservedWord(parser, context, t) {
    if (t === 209005) {
        if (context & (4194304 | 2048))
            report(parser, 101);
        parser.destructible |= 128;
    }
    if (t === 241770 && context & 2097152)
        report(parser, 99, 'yield');
    return ((t & 20480) === 20480 ||
        (t & 36864) === 36864 ||
        t == 143479);
}
function isPropertyWithPrivateFieldKey(expr) {
    return !expr.property ? false : expr.property.type === 'PrivateName';
}
function isValidLabel(parser, labels, name, isIterationStatement) {
    while (labels) {
        if (labels['$' + name]) {
            if (isIterationStatement)
                report(parser, 141);
            return 1;
        }
        if (isIterationStatement && labels.loop)
            isIterationStatement = 0;
        labels = labels['$'];
    }
    return 0;
}
function validateAndDeclareLabel(parser, labels, name) {
    let set = labels;
    do {
        if (set['$' + name])
            report(parser, 140, name);
        set = set['$'];
    } while (set);
    labels['$' + name] = 1;
}
function finishNode(parser, context, start, line, column, node) {
    if (context & 2) {
        node.start = start;
        node.end = parser.startIndex;
    }
    if (context & 4) {
        node.loc = {
            start: {
                line,
                column,
            },
            end: {
                line: parser.startLine,
                column: parser.startColumn,
            }
        };
        if (parser.sourceFile) {
            node.loc.source = parser.sourceFile;
        }
    }
    return node;
}

function create(source, sourceFile) {
    return {
        source,
        flags: 0,
        index: 0,
        line: 1,
        column: 0,
        startIndex: 0,
        end: source.length,
        tokenIndex: 0,
        startColumn: 0,
        colPos: 0,
        linePos: 0,
        startLine: 1,
        sourceFile,
        tokenValue: '',
        token: 1048576,
        tokenRaw: '',
        tokenRegExp: undefined,
        nextCP: source.charCodeAt(0),
        exportedNames: {},
        exportedBindings: {},
        assignable: 1,
        destructible: 0
    };
}
function parseSource(source, options, context) {
    let sourceFile = '';
    if (options != null) {
        if (options.module)
            context |= 2048 | 1024;
        if (options.next)
            context |= 1;
        if (options.loc)
            context |= 4;
        if (options.ranges)
            context |= 2;
        if (options.lexical)
            context |= 64;
        if (options.webcompat)
            context |= 256;
        if (options.directives)
            context |= 8 | 512;
        if (options.globalReturn)
            context |= 32;
        if (options.raw)
            context |= 512;
        if (options.preserveParens)
            context |= 128;
        if (options.impliedStrict)
            context |= 1024;
        if (options.identifierPattern)
            context |= 536870912;
        if (options.source)
            sourceFile = options.source;
    }
    const parser = create(source, sourceFile);
    if (context & 1)
        skipHashBang(parser);
    const scope = context & 64 ? initblockScope() : {};
    let body = [];
    let sourceType = 'script';
    if (context & 2048) {
        sourceType = 'module';
        body = parseModuleItemList(parser, context | 8192 | 16384, scope);
        if (context & 64) {
            for (const key in parser.exportedBindings) {
                if (key !== '$default' && (scope.var[key] === undefined && scope.lexicals[key] === undefined)) {
                    report(parser, 150, key.slice(1));
                }
            }
        }
    }
    else {
        body = parseStatementList(parser, context | 8192 | 16384, scope);
    }
    const node = {
        type: 'Program',
        sourceType,
        body
    };
    if (context & 2) {
        node.start = 0;
        node.end = source.length;
    }
    if (context & 4) {
        node.loc = {
            start: { line: 1, column: 0 },
            end: { line: parser.line, column: parser.column }
        };
        if (parser.sourceFile) {
            node.loc.source = sourceFile;
        }
    }
    return node;
}
function parseStatementList(parser, context, scope) {
    nextToken(parser, context | 32768);
    const statements = [];
    while (parser.token === 134283267) {
        const { index, tokenIndex, tokenValue, linePos, colPos, token } = parser;
        const expr = parseLiteral(parser, context, tokenIndex, linePos, colPos);
        if (index - tokenIndex < 13 && tokenValue === 'use strict') {
            if ((parser.token & 1048576) === 1048576 || parser.flags & 1) {
                context |= 1024;
            }
        }
        statements.push(parseDirective(parser, context, expr, token, tokenIndex, linePos, colPos));
    }
    while (parser.token !== 1048576) {
        statements.push(parseStatementListItem(parser, context, scope, {}, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    return statements;
}
function parseModuleItemList(parser, context, scope) {
    nextToken(parser, context | 32768);
    const statements = [];
    if (context & 8) {
        while (parser.token === 134283267) {
            const { index, tokenIndex, tokenValue, linePos, colPos, token } = parser;
            const expr = parseLiteral(parser, context, tokenIndex, linePos, colPos);
            if (index - tokenIndex < 13 && tokenValue === 'use strict') {
                if ((parser.token & 1048576) === 1048576) {
                    context |= 1024;
                }
            }
            statements.push(parseDirective(parser, context, expr, token, tokenIndex, linePos, colPos));
        }
    }
    while (parser.token !== 1048576) {
        statements.push(parseModuleItem(parser, context, scope, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    return statements;
}
function parseModuleItem(parser, context, scope, start, line, column) {
    switch (parser.token) {
        case 20563:
            return parseExportDeclaration(parser, context, scope, start, line, column);
        case 86105:
            return parseImportDeclaration(parser, context, scope, start, line, column);
        default:
            return parseStatementListItem(parser, context, scope, {}, start, line, column);
    }
}
function parseStatementListItem(parser, context, scope, labels, start, line, column) {
    switch (parser.token) {
        case 86103:
            return parseFunctionDeclaration(parser, context, scope, 1, 0, 0, start, line, column);
        case 133:
            if (context & 2048)
                return parseDecorators(parser, context);
        case 86093:
            return parseClassDeclaration(parser, context, scope, 0, start, line, column);
        case 268521545:
            return parseLexicalDeclaration(parser, context, scope, 16, 8, start, line, column);
        case 268677192:
            return parseLetIdentOrVarDeclarationStatement(parser, context, scope, start, line, column);
        case 20563:
            report(parser, 106, 'export');
        case 86105:
            nextToken(parser, context);
            switch (parser.token) {
                case 67174411:
                    return parseImportCallDeclaration(parser, context, start, line, column);
                default:
                    report(parser, 106, 'import');
            }
        case 143468:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, labels, 1, start, line, column);
        default:
            return parseStatement(parser, context, scope, labels, 1, start, line, column);
    }
}
function parseStatement(parser, context, scope, labels, allowFuncDecl, start, line, column) {
    switch (parser.token) {
        case 2162700:
            return parseBlock(parser, context, context & 64 ? inheritScope(scope, 2) : scope, labels, start, line, column);
        case 268521543:
            return parseVariableStatement(parser, context, scope, 8, start, line, column);
        case 20571:
            return parseReturnStatement(parser, context, start, line, column);
        case 20568:
            return parseIfStatement(parser, context, scope, labels, start, line, column);
        case 20561:
            return parseDoWhileStatement(parser, context, scope, labels, start, line, column);
        case 20577:
            return parseWhileStatement(parser, context, scope, labels, start, line, column);
        case 20566:
            return parseForStatement(parser, context, scope, labels, start, line, column);
        case 86109:
            return parseSwitchStatement(parser, context, scope, labels, start, line, column);
        case -2146435055:
            return parseEmptyStatement(parser, context, start, line, column);
        case 86111:
            return parseThrowStatement(parser, context, start, line, column);
        case 20554:
            return parseBreakStatement(parser, context, labels, start, line, column);
        case 20558:
            return parseContinueStatement(parser, context, labels, start, line, column);
        case 20576:
            return parseTryStatement(parser, context, scope, labels, start, line, column);
        case 20578:
            return parseWithStatement(parser, context, scope, labels, start, line, column);
        case 20559:
            return parseDebuggerStatement(parser, context, start, line, column);
        case 143468:
            return parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, labels, 0, start, line, column);
        case 86103:
            report(parser, context & 1024
                ? 76
                : (context & 256) === 0
                    ? 78
                    : 77);
        case 86093:
            report(parser, 79);
        default:
            return parseExpressionOrLabelledStatement(parser, context, scope, labels, allowFuncDecl, start, line, column);
    }
}
function parseExpressionOrLabelledStatement(parser, context, scope, labels, allowFuncDecl, start, line, column) {
    const { tokenValue, token } = parser;
    let expr;
    switch (token) {
        case 268677192:
            expr = parseIdentifier(parser, context, 0, start, line, column);
            if (context & 1024)
                report(parser, 86);
            if (parser.token === 21)
                return parseLabelledStatement(parser, context, scope, labels, tokenValue, expr, token, allowFuncDecl, start, line, column);
            if (parser.token === 69271571) {
                report(parser, 85);
            }
            break;
        default:
            expr = parsePrimaryExpressionExtended(parser, context, 0, 0, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    if (token & 143360 && parser.token === 21) {
        return parseLabelledStatement(parser, context, scope, labels, tokenValue, expr, token, allowFuncDecl, start, line, column);
    }
    expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, start, line, column);
    expr = parseAssignmentExpression(parser, context, 0, start, line, column, expr);
    if (parser.token === -1073741806) {
        expr = parseSequenceExpression(parser, context, start, line, column, expr);
    }
    return parseExpressionStatement(parser, context, expr, start, line, column);
}
function parseBlock(parser, context, scope, labels, start, line, column) {
    const body = [];
    consume(parser, context | 32768, 2162700);
    while (parser.token !== -2146435057) {
        body.push(parseStatementListItem(parser, (context | 16384) ^ 16384, scope, { $: labels }, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    consume(parser, context | 32768, -2146435057);
    return finishNode(parser, context, start, line, column, {
        type: 'BlockStatement',
        body
    });
}
function parseReturnStatement(parser, context, start, line, column) {
    if ((context & 32) === 0 && context & 8192)
        report(parser, 93);
    nextToken(parser, context | 32768);
    const argument = parser.flags & 1 || parser.token & 1048576
        ? null
        : parseExpressions(parser, context, 1, parser.tokenIndex, parser.line, parser.column);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'ReturnStatement',
        argument
    });
}
function parseExpressionStatement(parser, context, expression, start, line, column) {
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'ExpressionStatement',
        expression
    });
}
function parseLabelledStatement(parser, context, scope, labels, label, expr, token, allowFuncDecl, start, line, column) {
    validateBindingIdentifier(parser, context, 0, token, 1);
    validateAndDeclareLabel(parser, labels, label);
    nextToken(parser, context | 32768);
    const body = allowFuncDecl &&
        (context & 1024) === 0 &&
        context & 256 &&
        parser.token === 86103
        ? parseFunctionDeclaration(parser, context, scope, 0, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos)
        : parseStatement(parser, (context | 16384) ^ 16384, scope, labels, allowFuncDecl, parser.tokenIndex, parser.linePos, parser.colPos);
    return finishNode(parser, context, start, line, column, {
        type: 'LabeledStatement',
        label: expr,
        body
    });
}
function parseAsyncArrowOrAsyncFunctionDeclaration(parser, context, scope, labels, allowFuncDecl, start, line, column) {
    const { token, tokenValue } = parser;
    let expr = parseIdentifier(parser, context, 0, start, line, column);
    if (parser.token === 21) {
        return parseLabelledStatement(parser, context, scope, labels, tokenValue, expr, token, 1, start, line, column);
    }
    const asyncNewLine = parser.flags & 1;
    if (!asyncNewLine) {
        if (parser.token === 86103) {
            if (!allowFuncDecl)
                report(parser, 127);
            return parseFunctionDeclaration(parser, context, scope, 1, 0, 1, start, line, column);
        }
        if ((parser.token & 143360) === 143360) {
            if (parser.assignable & 2)
                report(parser, 47);
            if (parser.token === 209005)
                report(parser, 29);
            if (context & (1024 | 2097152) && parser.token === 241770) {
                report(parser, 30);
            }
            if ((parser.token & 537079808) === 537079808)
                parser.flags |= 128;
            if (context & 64) {
                scope = inheritScope(initblockScope(), 16);
                declareAndDedupe(parser, context, scope, parser.tokenValue, 1, 0);
            }
            const param = [parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos)];
            expr = parseArrowFunctionExpression(parser, context, scope, param, 1, start, line, column);
            if (parser.token === -1073741806)
                expr = parseSequenceExpression(parser, context, start, line, column, expr);
            return parseExpressionStatement(parser, context, expr, start, line, column);
        }
    }
    if (parser.token === 67174411) {
        expr = parseAsyncArrowOrCallExpression(parser, (context | 134217728) ^ 134217728, expr, 1, asyncNewLine, start, line, column);
    }
    else {
        if (parser.token === 10) {
            if (context & 64) {
                scope = inheritScope(initblockScope(), 16);
                declareAndDedupe(parser, context, scope, 'async', 1, 0);
            }
            expr = parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
        }
        parser.assignable = 1;
    }
    expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, start, line, column);
    if (parser.token === -1073741806)
        expr = parseSequenceExpression(parser, context, start, line, column, expr);
    expr = parseAssignmentExpression(parser, context, 0, start, line, column, expr);
    parser.assignable = 1;
    return parseExpressionStatement(parser, context, expr, start, line, column);
}
function parseDirective(parser, context, expression, token, start, line, column) {
    const { tokenRaw } = parser;
    if (token !== -2146435055) {
        parser.assignable = 2;
        expression = parseMemberOrUpdateExpression(parser, context, expression, 0, 0, start, line, column);
        if (parser.token !== -2146435055) {
            expression = parseAssignmentExpression(parser, context, 0, start, line, column, expression);
            if (parser.token === -1073741806) {
                expression = parseSequenceExpression(parser, context, start, line, column, expression);
            }
        }
        consumeSemicolon(parser, context | 32768);
    }
    return context & 8
        ? finishNode(parser, context, start, line, column, {
            type: 'ExpressionStatement',
            expression,
            directive: tokenRaw.slice(1, -1)
        })
        : finishNode(parser, context, start, line, column, {
            type: 'ExpressionStatement',
            expression
        });
}
function parseEmptyStatement(parser, context, start, line, column) {
    nextToken(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'EmptyStatement'
    });
}
function parseThrowStatement(parser, context, start, line, column) {
    nextToken(parser, context | 32768);
    if (parser.flags & 1)
        report(parser, 91);
    const argument = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'ThrowStatement',
        argument
    });
}
function parseIfStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context);
    consume(parser, context | 32768, 67174411);
    parser.assignable = 1;
    const test = parseExpressions(parser, context, 1, parser.tokenIndex, parser.line, parser.colPos);
    consume(parser, context | 32768, 1073741840);
    const consequent = parseConsequentOrAlternate(parser, (context | 16384) ^ 16384, scope, labels, parser.tokenIndex, parser.linePos, parser.colPos);
    let alternate = null;
    if (parser.token === 20562) {
        nextToken(parser, context | 32768);
        alternate = parseConsequentOrAlternate(parser, (context | 16384) ^ 16384, scope, labels, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    return finishNode(parser, context, start, line, column, {
        type: 'IfStatement',
        test,
        consequent,
        alternate
    });
}
function parseConsequentOrAlternate(parser, context, scope, labels, start, line, column) {
    return context & 1024 ||
        (context & 256) === 0 ||
        parser.token !== 86103
        ? parseStatement(parser, context, scope, { $: labels }, 0, parser.tokenIndex, parser.linePos, parser.colPos)
        : parseFunctionDeclaration(parser, context, scope, 0, 0, 0, start, line, column);
}
function parseSwitchStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context);
    consume(parser, context | 32768, 67174411);
    const discriminant = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context, 1073741840);
    consume(parser, context, 2162700);
    const cases = [];
    let seenDefault = 0;
    if (context & 64)
        scope = inheritScope(scope, 8);
    while (parser.token !== -2146435057) {
        const { tokenIndex, linePos, colPos } = parser;
        let test = null;
        const consequent = [];
        if (consumeOpt(parser, context | 32768, 20555)) {
            test = parseExpressions(parser, (context | 134217728) ^ 134217728, 1, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        else {
            consume(parser, context | 32768, 20560);
            if (seenDefault)
                report(parser, 90);
            seenDefault = 1;
        }
        consume(parser, context | 32768, 21);
        while (parser.token !== 20555 &&
            parser.token !== -2146435057 &&
            parser.token !== 20560) {
            consequent.push(parseStatementListItem(parser, (context | 4096 | 16384) ^ 16384, scope, {
                $: labels
            }, parser.tokenIndex, parser.linePos, parser.colPos));
        }
        cases.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
            type: 'SwitchCase',
            test,
            consequent
        }));
    }
    consume(parser, context | 32768, -2146435057);
    return finishNode(parser, context, start, line, column, {
        type: 'SwitchStatement',
        discriminant,
        cases
    });
}
function parseWhileStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context);
    consume(parser, context | 32768, 67174411);
    const test = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, 1073741840);
    const body = parseIterationStatementBody(parser, context, scope, labels);
    return finishNode(parser, context, start, line, column, {
        type: 'WhileStatement',
        test,
        body
    });
}
function parseIterationStatementBody(parser, context, scope, labels) {
    return parseStatement(parser, ((context | 16384 | 134217728) ^ (16384 | 134217728)) | 131072, scope, { loop: 1, $: labels }, 0, parser.tokenIndex, parser.linePos, parser.colPos);
}
function parseContinueStatement(parser, context, labels, start, line, column) {
    if ((context & 131072) === 0)
        report(parser, 68);
    nextToken(parser, context);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.token & 143360) {
        const { tokenValue, tokenIndex, linePos, colPos } = parser;
        label = parseIdentifier(parser, context | 32768, 0, tokenIndex, linePos, colPos);
        if (!isValidLabel(parser, labels, tokenValue, 1))
            report(parser, 142, tokenValue);
    }
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'ContinueStatement',
        label
    });
}
function parseBreakStatement(parser, context, labels, start, line, column) {
    nextToken(parser, context | 32768);
    let label = null;
    if ((parser.flags & 1) === 0 && parser.token & 143360) {
        const { tokenValue, tokenIndex, linePos, colPos } = parser;
        label = parseIdentifier(parser, context | 32768, 0, tokenIndex, linePos, colPos);
        if (!isValidLabel(parser, labels, tokenValue, 0))
            report(parser, 142, tokenValue);
    }
    else if ((context & (4096 | 131072)) === 0) {
        report(parser, 69);
    }
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'BreakStatement',
        label
    });
}
function parseWithStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context);
    if (context & 1024)
        report(parser, 92);
    consume(parser, context | 32768, 67174411);
    const object = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, 1073741840);
    const body = parseStatement(parser, (context | 16384) ^ 16384, scope, labels, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    return finishNode(parser, context, start, line, column, {
        type: 'WithStatement',
        object,
        body
    });
}
function parseDebuggerStatement(parser, context, start, line, column) {
    nextToken(parser, context | 32768);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'DebuggerStatement'
    });
}
function parseTryStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context | 32768);
    const isLexical = context & 64;
    const blockScope = isLexical ? inheritScope(scope, 2) : {};
    const block = parseBlock(parser, context, blockScope, { $: labels }, parser.tokenIndex, parser.linePos, parser.colPos);
    const { tokenIndex, linePos, colPos } = parser;
    const handler = consumeOpt(parser, context | 32768, 20556)
        ? parseCatchBlock(parser, context, scope, labels, isLexical, tokenIndex, linePos, colPos)
        : null;
    let finalizer = null;
    if (parser.token === 20565) {
        nextToken(parser, context | 32768);
        const finalizerScope = isLexical ? inheritScope(scope, 2) : {};
        finalizer = parseBlock(parser, context, finalizerScope, { $: labels }, tokenIndex, linePos, colPos);
    }
    if (!handler && !finalizer) {
        report(parser, 89);
    }
    return finishNode(parser, context, start, line, column, {
        type: 'TryStatement',
        block,
        handler,
        finalizer
    });
}
function parseCatchBlock(parser, context, scope, labels, isLexical, start, line, column) {
    let param = null;
    let secondScope = scope;
    if (consumeOpt(parser, context, 67174411)) {
        if (isLexical)
            scope = inheritScope(scope, 4);
        param = parseBindingPattern(parser, context, scope, 0, 1, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        if (isLexical)
            checkConflictingLexicalDeclarations(parser, context, scope, 0);
        if (parser.token === -1073741806) {
            report(parser, 87);
        }
        else if (parser.token === -2143289315) {
            report(parser, 88);
        }
        consume(parser, context | 32768, 1073741840);
        if (isLexical)
            secondScope = inheritScope(scope, 2);
    }
    const body = parseBlock(parser, context, secondScope, { $: labels }, parser.tokenIndex, parser.linePos, parser.colPos);
    return finishNode(parser, context, start, line, column, {
        type: 'CatchClause',
        param,
        body
    });
}
function parseDoWhileStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context | 32768);
    const body = parseIterationStatementBody(parser, context, scope, labels);
    consume(parser, context, 20577);
    consume(parser, context | 32768, 67174411);
    const test = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, 1073741840);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'DoWhileStatement',
        body,
        test
    });
}
function parseLetIdentOrVarDeclarationStatement(parser, context, scope, start, line, column) {
    const { token, tokenValue } = parser;
    let expr = parseIdentifier(parser, context, 0, start, line, column);
    if ((parser.token & (143360 | 2097152)) === 0) {
        parser.assignable = 1;
        if (context & 1024)
            report(parser, 86);
        if (parser.token === 21) {
            return parseLabelledStatement(parser, context, scope, {}, tokenValue, expr, token, 0, start, line, column);
        }
        expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, start, line, column);
        expr = parseAssignmentExpression(parser, context, 0, start, line, column, expr);
        if (parser.token === -1073741806) {
            expr = parseSequenceExpression(parser, context, start, line, column, expr);
        }
        return parseExpressionStatement(parser, context, expr, start, line, column);
    }
    const declarations = parseVariableDeclarationList(parser, context, scope, 1, 8, 8);
    if (context & 64)
        checkConflictingLexicalDeclarations(parser, context, scope, 1);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'VariableDeclaration',
        kind: 'let',
        declarations
    });
}
function parseLexicalDeclaration(parser, context, scope, type, origin, start, line, column) {
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, 0, type, origin);
    if (context & 64)
        checkConflictingLexicalDeclarations(parser, context, scope, 1);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'VariableDeclaration',
        kind: type & 8 ? 'let' : 'const',
        declarations
    });
}
function parseVariableStatement(parser, context, scope, origin, start, line, column) {
    nextToken(parser, context);
    const declarations = parseVariableDeclarationList(parser, context, scope, 0, 4, origin);
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'VariableDeclaration',
        kind: 'var',
        declarations
    });
}
function parseVariableDeclarationList(parser, context, scope, verifyDuplicates, type, origin) {
    let bindingCount = 1;
    const list = [
        parseVariableDeclaration(parser, context, scope, verifyDuplicates, type, origin)
    ];
    while (consumeOpt(parser, context, -1073741806)) {
        bindingCount++;
        list.push(parseVariableDeclaration(parser, context, scope, verifyDuplicates, type, origin));
    }
    if (bindingCount > 1 && origin & 4 && parser.token & 262144) {
        report(parser, 61, KeywordDescTable[parser.token & 255]);
    }
    return list;
}
function parseVariableDeclaration(parser, context, scope, verifyDuplicates, type, origin) {
    const { token, tokenIndex, linePos, colPos } = parser;
    let init = null;
    const id = parseBindingPattern(parser, context, scope, verifyDuplicates, type, origin, tokenIndex, linePos, colPos);
    if (parser.token === -2143289315) {
        nextToken(parser, context | 32768);
        init = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        if (origin & 4 || (token & 2097152) === 0) {
            if (parser.token === 274546 ||
                (parser.token === 8738609 &&
                    (token & 2097152 ||
                        (type & 4) === 0 ||
                        (context & 256) === 0 ||
                        context & 1024))) {
                reportAt(tokenIndex, parser.line, parser.index - 3, 60, parser.token === 274546 ? 'of' : 'in');
            }
        }
    }
    else if ((type & 16 || (token & 2097152) > 0) &&
        (parser.token & 262144) !== 262144) {
        report(parser, 59, type & 16 ? 'const' : 'destructuring');
    }
    return finishNode(parser, context, tokenIndex, linePos, colPos, {
        type: 'VariableDeclarator',
        init,
        id
    });
}
function parseForStatement(parser, context, scope, labels, start, line, column) {
    nextToken(parser, context);
    const forAwait = (context & 4194304) > 0 && consumeOpt(parser, context, 209005);
    consume(parser, context | 32768, 67174411);
    if (context & 64)
        scope = inheritScope(scope, 1);
    let test = null;
    let update = null;
    let destructible = 0;
    let init = null;
    let isVarDecl = parser.token & 268435456;
    let right;
    const { token, tokenIndex, linePos, colPos } = parser;
    if (isVarDecl) {
        if (token === 268677192) {
            init = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
            if (parser.token & (143360 | 2097152)) {
                if (parser.token === 8738609) {
                    if (context & 1024)
                        report(parser, 67);
                }
                else {
                    init = finishNode(parser, context, tokenIndex, linePos, colPos, {
                        type: 'VariableDeclaration',
                        kind: 'let',
                        declarations: parseVariableDeclarationList(parser, context | 134217728, scope, 1, 8, 4)
                    });
                }
                if (context & 64)
                    checkConflictingLexicalDeclarations(parser, context, scope, 1);
                parser.assignable = 1;
            }
            else if (context & 1024) {
                report(parser, 67);
            }
            else {
                isVarDecl = 0;
                parser.assignable = 1;
                init = parseMemberOrUpdateExpression(parser, context, init, 0, 0, tokenIndex, linePos, colPos);
                if (parser.token === 274546)
                    report(parser, 117);
            }
        }
        else {
            nextToken(parser, context);
            const kind = KeywordDescTable[token & 255];
            init = finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'VariableDeclaration',
                kind,
                declarations: parseVariableDeclarationList(parser, context | 134217728, scope, 0, kind === 'var' ? 4 : 16, 4)
            });
            if (context & 64 && kind === 'const')
                checkConflictingLexicalDeclarations(parser, context, scope, 1);
            parser.assignable = 1;
        }
    }
    else if (token === -2146435055) {
        if (forAwait)
            report(parser, 83);
    }
    else if ((token & 2097152) === 2097152) {
        init =
            token === 2162700
                ? parseObjectLiteralOrPattern(parser, context, scope, 1, 0, 0, 4, tokenIndex, linePos, colPos)
                : parseArrayExpressionOrPattern(parser, context, scope, 1, 0, 0, 4, tokenIndex, linePos, colPos);
        destructible = parser.destructible;
        if (context & 256 && destructible & 64) {
            report(parser, 63);
        }
        parser.assignable =
            destructible & 16 ? 2 : 1;
        init = parseMemberOrUpdateExpression(parser, context | 134217728, init, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    else {
        init = parseLeftHandSideExpression(parser, context | 134217728, 1, 0, tokenIndex, linePos, colPos);
    }
    if ((parser.token & 262144) === 262144) {
        const isOf = parser.token === 274546;
        if (parser.assignable & 2) {
            report(parser, 81, isOf && forAwait ? 'await' : isOf ? 'of' : 'in');
        }
        reinterpretToPattern(parser, init);
        nextToken(parser, context | 32768);
        if (!isOf) {
            if (forAwait)
                report(parser, 83);
            right = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        else {
            right = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        consume(parser, context | 32768, 1073741840);
        const body = parseIterationStatementBody(parser, context, scope, labels);
        return isOf
            ? finishNode(parser, context, start, line, column, {
                type: 'ForOfStatement',
                body,
                left: init,
                right,
                await: forAwait
            })
            : finishNode(parser, context, start, line, column, {
                type: 'ForInStatement',
                body,
                left: init,
                right
            });
    }
    if (forAwait) {
        report(parser, 83);
    }
    if (!isVarDecl) {
        if (destructible & 8 && parser.token !== -2143289315) {
            report(parser, 126);
        }
        init = parseAssignmentExpression(parser, context | 134217728, 0, tokenIndex, linePos, colPos, init);
    }
    if (parser.token === -1073741806)
        init = parseSequenceExpression(parser, context, parser.tokenIndex, parser.linePos, parser.colPos, init);
    consume(parser, context | 32768, -2146435055);
    if (parser.token !== -2146435055)
        test = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, -2146435055);
    if (parser.token !== 1073741840)
        update = parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, 1073741840);
    const body = parseIterationStatementBody(parser, context, scope, labels);
    return finishNode(parser, context, start, line, column, {
        type: 'ForStatement',
        body,
        init,
        test,
        update
    });
}
function parseImportDeclaration(parser, context, scope, start, line, column) {
    nextToken(parser, context);
    let source;
    const isLexical = (context & 64) === 0 ? 0 : 1;
    if (parser.token === 67174411)
        return parseImportCallDeclaration(parser, context, start, line, column);
    const { tokenIndex, linePos, colPos } = parser;
    const specifiers = [];
    if (parser.token === 134283267) {
        source = parseLiteral(parser, context, tokenIndex, linePos, colPos);
    }
    else {
        if (parser.token & 143360) {
            validateBindingIdentifier(parser, context, 16, parser.token, 0);
            if (isLexical)
                declareName(parser, context, scope, parser.tokenValue, 16, 1, 0);
            const local = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
            specifiers.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'ImportDefaultSpecifier',
                local
            }));
            if (consumeOpt(parser, context, -1073741806)) {
                switch (parser.token) {
                    case 8456755:
                        parseImportNamespaceSpecifier(parser, context, scope, isLexical, specifiers);
                        break;
                    case 2162700:
                        parseImportSpecifierOrNamedImports(parser, context, scope, isLexical, specifiers);
                        break;
                    default:
                        report(parser, 110);
                }
            }
        }
        else if (parser.token === 8456755) {
            parseImportNamespaceSpecifier(parser, context, scope, isLexical, specifiers);
        }
        else if (parser.token === 2162700) {
            parseImportSpecifierOrNamedImports(parser, context, scope, isLexical, specifiers);
        }
        else
            report(parser, 28, KeywordDescTable[parser.token & 255]);
        source = parseModuleSpecifier(parser, context);
    }
    consumeSemicolon(parser, context | 32768);
    return finishNode(parser, context, start, line, column, {
        type: 'ImportDeclaration',
        specifiers,
        source
    });
}
function parseImportNamespaceSpecifier(parser, context, scope, isLexical, specifiers) {
    const { tokenIndex, linePos, colPos } = parser;
    nextToken(parser, context);
    consume(parser, context, 12395);
    if (parser.token & (143360 | 12288)) {
        validateBindingIdentifier(parser, context, 16, parser.token, 0);
    }
    else {
        reportAt(tokenIndex, parser.line, parser.index, 28, KeywordDescTable[parser.token & 255]);
    }
    if (isLexical)
        declareName(parser, context, scope, parser.tokenValue, 16, 1, 0);
    const local = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    specifiers.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
        type: 'ImportNamespaceSpecifier',
        local
    }));
}
function parseModuleSpecifier(parser, context) {
    consumeOpt(parser, context, 12401);
    if (parser.token !== 134283267)
        report(parser, 108, 'Import');
    return parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
}
function parseImportSpecifierOrNamedImports(parser, context, scope, isLexical, specifiers) {
    nextToken(parser, context);
    while (parser.token & 143360) {
        let { token, tokenValue, tokenIndex, linePos, colPos } = parser;
        const imported = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
        let local;
        if (consumeOpt(parser, context, 12395)) {
            if ((parser.token & 134217728) === 134217728 || parser.token === -1073741806) {
                report(parser, 109);
            }
            else {
                validateBindingIdentifier(parser, context, 16, parser.token, 0);
            }
            tokenValue = parser.tokenValue;
            local = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        else {
            validateBindingIdentifier(parser, context, 16, token, 0);
            local = imported;
        }
        if (isLexical)
            declareName(parser, context, scope, tokenValue, 16, 1, 0);
        specifiers.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
            type: 'ImportSpecifier',
            local,
            imported
        }));
        if (parser.token !== -2146435057)
            consume(parser, context, -1073741806);
    }
    consume(parser, context, -2146435057);
    return specifiers;
}
function parseImportCallDeclaration(parser, context, start, line, column) {
    let expr = parseImportExpression(parser, context, 0, start, line, column);
    expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, start, line, column);
    return parseExpressionStatement(parser, context, expr, start, line, column);
}
function parseExportDeclaration(parser, context, scope, start, line, column) {
    nextToken(parser, context | 32768);
    const specifiers = [];
    let declaration = null;
    let source = null;
    let key;
    if (consumeOpt(parser, context | 32768, 20560)) {
        switch (parser.token) {
            case 86103: {
                declaration = parseFunctionDeclaration(parser, context, scope, 1, 1, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                break;
            }
            case 133:
            case 86093:
                declaration = parseClassDeclaration(parser, context, scope, 1, parser.tokenIndex, parser.linePos, parser.colPos);
                break;
            case 143468:
                const idxBeforeAsync = parser.tokenIndex;
                const lineBeforeAsync = parser.linePos;
                const columnBeforeAsync = parser.colPos;
                declaration = parseIdentifier(parser, context, 0, idxBeforeAsync, lineBeforeAsync, columnBeforeAsync);
                const { flags } = parser;
                if ((flags & 1) === 0) {
                    if (parser.token === 86103) {
                        declaration = parseFunctionDeclaration(parser, context, scope, 1, 1, 1, idxBeforeAsync, lineBeforeAsync, columnBeforeAsync);
                    }
                    else {
                        if (parser.token === 67174411) {
                            declaration = parseAsyncArrowOrCallExpression(parser, (context | 134217728) ^ 134217728, declaration, 1, flags, idxBeforeAsync, lineBeforeAsync, columnBeforeAsync);
                            declaration = parseMemberOrUpdateExpression(parser, context, declaration, 0, 0, idxBeforeAsync, lineBeforeAsync, columnBeforeAsync);
                            declaration = parseAssignmentExpression(parser, context, 0, parser.tokenIndex, lineBeforeAsync, columnBeforeAsync, declaration);
                        }
                        else if (parser.token & 143360) {
                            if (context & 64) {
                                scope = inheritScope(initblockScope(), 16);
                                declareAndDedupe(parser, context, scope, parser.tokenValue, 1, 0);
                            }
                            declaration = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                            declaration = parseArrowFunctionExpression(parser, context, scope, [declaration], 1, idxBeforeAsync, lineBeforeAsync, columnBeforeAsync);
                        }
                    }
                }
                break;
            default:
                declaration = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                consumeSemicolon(parser, context | 32768);
        }
        if (context & 64)
            updateExportsList(parser, 'default');
        return finishNode(parser, context, start, line, column, {
            type: 'ExportDefaultDeclaration',
            declaration
        });
    }
    switch (parser.token) {
        case 8456755: {
            let ecma262PR = 0;
            nextToken(parser, context);
            if (context & 1 && consumeOpt(parser, context, 12395)) {
                ecma262PR = 1;
                specifiers.push(finishNode(parser, context, parser.tokenIndex, parser.linePos, parser.colPos, {
                    type: 'ExportNamespaceSpecifier',
                    specifier: parseIdentifier(parser, context, 0, start, line, column)
                }));
            }
            consume(parser, context, 12401);
            if (parser.token !== 134283267)
                report(parser, 108, 'Export');
            source = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
            consumeSemicolon(parser, context | 32768);
            return finishNode(parser, context, start, line, column, ecma262PR
                ? {
                    type: 'ExportNamedDeclaration',
                    source,
                    specifiers
                }
                : {
                    type: 'ExportAllDeclaration',
                    source
                });
        }
        case 2162700: {
            nextToken(parser, context);
            const tmpExportedNames = [];
            const tmpExportedBindings = [];
            while (parser.token & 143360) {
                const { tokenIndex, tokenValue, linePos, colPos } = parser;
                const local = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
                let exported;
                if (parser.token === 12395) {
                    nextToken(parser, context);
                    if (context & 64) {
                        tmpExportedNames.push(parser.tokenValue);
                        tmpExportedBindings.push(tokenValue);
                    }
                    exported = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else {
                    if (context & 64) {
                        tmpExportedNames.push(parser.tokenValue);
                        tmpExportedBindings.push(parser.tokenValue);
                    }
                    exported = local;
                }
                specifiers.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
                    type: 'ExportSpecifier',
                    local,
                    exported
                }));
                if (parser.token !== -2146435057)
                    consume(parser, context, -1073741806);
            }
            consume(parser, context, -2146435057);
            if (consumeOpt(parser, context, 12401)) {
                if (parser.token !== 134283267)
                    report(parser, 108, 'Export');
                source = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
            }
            else if (context & 64) {
                let i = 0;
                let iMax = tmpExportedNames.length;
                for (; i < iMax; i++) {
                    updateExportsList(parser, tmpExportedNames[i]);
                }
                i = 0;
                iMax = tmpExportedBindings.length;
                for (; i < iMax; i++) {
                    addBindingToExports(parser, tmpExportedBindings[i]);
                }
            }
            consumeSemicolon(parser, context | 32768);
            break;
        }
        case 86093:
            declaration = parseClassDeclaration(parser, context, scope, 2, parser.tokenIndex, parser.linePos, parser.colPos);
            break;
        case 86103:
            declaration = parseFunctionDeclaration(parser, context, scope, 1, 2, 0, parser.tokenIndex, parser.linePos, parser.colPos);
            break;
        case 268677192:
            declaration = parseLexicalDeclaration(parser, context, scope, 8, 16, parser.tokenIndex, parser.linePos, parser.colPos);
            break;
        case 268521545:
            declaration = parseLexicalDeclaration(parser, context, scope, 16, 16, parser.tokenIndex, parser.linePos, parser.colPos);
            break;
        case 268521543:
            declaration = parseVariableStatement(parser, context, scope, 16, parser.tokenIndex, parser.linePos, parser.colPos);
            break;
        case 143468:
            const idxAfterAsync = parser.tokenIndex;
            const lineAfterAsync = parser.linePos;
            const columnxAfterAsync = parser.colPos;
            nextToken(parser, context);
            if ((parser.flags & 1) === 0 && parser.token === 86103) {
                declaration = parseFunctionDeclaration(parser, context, scope, 1, 2, 1, idxAfterAsync, lineAfterAsync, columnxAfterAsync);
                if (context & 64) {
                    key = declaration.id ? declaration.id.name : '';
                    addBindingToExports(parser, key);
                    updateExportsList(parser, key);
                }
                break;
            }
        default:
            report(parser, 28, KeywordDescTable[parser.token & 255]);
    }
    return finishNode(parser, context, start, line, column, {
        type: 'ExportNamedDeclaration',
        source,
        specifiers,
        declaration
    });
}
function parseExpression(parser, context, allowAssign, identifierPattern, inGroup, start, line, column) {
    let expr = parsePrimaryExpressionExtended(parser, context, 0, 0, allowAssign, identifierPattern, inGroup, start, line, column);
    expr = parseMemberOrUpdateExpression(parser, context, expr, 0, inGroup, start, line, column);
    return parseAssignmentExpression(parser, context, inGroup, start, line, column, expr);
}
function parseSequenceExpression(parser, context, start, line, column, expr) {
    const expressions = [expr];
    while (consumeOpt(parser, context | 32768, -1073741806)) {
        expressions.push(parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    return finishNode(parser, context, start, line, column, {
        type: 'SequenceExpression',
        expressions
    });
}
function parseExpressions(parser, context, assignable, start, line, column) {
    const expr = parseExpression(parser, context, assignable, 0, 0, start, line, column);
    return parser.token === -1073741806 ? parseSequenceExpression(parser, context, start, line, column, expr) : expr;
}
function parseAssignmentExpression(parser, context, inGroup, start, line, column, left) {
    if ((parser.token & 4194304) > 0) {
        if (parser.assignable & 2) {
            report(parser, 24);
        }
        if ((parser.token === -2143289315 && left.type === 'ArrayExpression') ||
            left.type === 'ObjectExpression') {
            reinterpretToPattern(parser, left);
        }
        const assignToken = parser.token;
        nextToken(parser, context | 32768);
        const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
        left = finishNode(parser, context, start, line, column, {
            type: 'AssignmentExpression',
            left,
            operator: KeywordDescTable[assignToken & 255],
            right
        });
        parser.assignable = 2;
        return left;
    }
    if ((parser.token & 8454144) > 0) {
        left = parseBinaryExpression(parser, context, inGroup, start, line, column, 4, left);
    }
    if (consumeOpt(parser, context | 32768, 22)) {
        left = parseConditionalExpression(parser, context, left, start, line, column);
    }
    return left;
}
function parseConditionalExpression(parser, context, test, start, line, column) {
    const consequent = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context | 32768, 21);
    parser.assignable = 1;
    const alternate = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'ConditionalExpression',
        test,
        consequent,
        alternate
    });
}
function parseBinaryExpression(parser, context, inGroup, start, line, column, minPrec, left) {
    const bit = -((context & 134217728) > 0) & 8738609;
    let t;
    let prec;
    parser.assignable = 2;
    while (parser.token & 8454144) {
        t = parser.token;
        prec = t & 3840;
        if (prec + ((t === 8457014) << 8) - ((bit === t) << 12) <= minPrec)
            break;
        nextToken(parser, context | 32768);
        left = finishNode(parser, context, start, line, column, {
            type: t & 524288 ? 'LogicalExpression' : 'BinaryExpression',
            left,
            right: parseBinaryExpression(parser, context, inGroup, parser.tokenIndex, parser.linePos, parser.colPos, prec, parseLeftHandSideExpression(parser, context, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos)),
            operator: KeywordDescTable[t & 255]
        });
    }
    if (parser.token === -2143289315)
        report(parser, 24);
    return left;
}
function parseUnaryExpression(parser, context, start, line, column, inGroup) {
    const unaryOperator = parser.token;
    nextToken(parser, context | 32768);
    const arg = parseLeftHandSideExpression(parser, context, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
    if (parser.token === 8457014)
        report(parser, 31);
    if (context & 1024 && unaryOperator === 16863275) {
        if (arg.type === 'Identifier') {
            report(parser, 124);
        }
        else if (isPropertyWithPrivateFieldKey(arg)) {
            report(parser, 131);
        }
    }
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'UnaryExpression',
        operator: KeywordDescTable[unaryOperator & 255],
        argument: arg,
        prefix: true
    });
}
function parseYieldExpressionOrIdentifier(parser, context, start, line, column) {
    if (context & 2097152) {
        nextToken(parser, context | 32768);
        if (context & 8388608)
            report(parser, 30);
        if (parser.token === 22)
            report(parser, 128);
        let argument = null;
        let delegate = false;
        if ((parser.flags & 1) < 1) {
            delegate = consumeOpt(parser, context | 32768, 8456755);
            if (parser.token & 65536 || delegate) {
                argument = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
            }
        }
        parser.assignable = 2;
        return finishNode(parser, context, start, line, column, {
            type: 'YieldExpression',
            argument,
            delegate
        });
    }
    if (context & 1024)
        report(parser, 113, 'Yield');
    return parseIdentifierOrArrow(parser, context, start, line, column);
}
function parseAwaitExpressionOrIdentifier(parser, context, inNewExpression, start, line, column) {
    if (context & 4194304) {
        if (inNewExpression) {
            report(parser, 80);
        }
        else if (context & 8388608) {
            reportAt(parser.index, parser.line, parser.index, 29);
        }
        nextToken(parser, context | 32768);
        const argument = parseLeftHandSideExpression(parser, context, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        parser.assignable = 2;
        return finishNode(parser, context, start, line, column, {
            type: 'AwaitExpression',
            argument
        });
    }
    if (context & 2048)
        report(parser, 113, 'Await');
    const expr = parseIdentifierOrArrow(parser, context, start, line, column);
    return parseMemberOrUpdateExpression(parser, context, expr, inNewExpression, 0, start, line, column);
}
function parseFunctionBody(parser, context, scope, origin, firstRestricted) {
    const { tokenIndex, linePos, colPos } = parser;
    consume(parser, context | 32768, 2162700);
    const body = [];
    const prevContext = context;
    if (parser.token !== -2146435057) {
        while (parser.token === 134283267) {
            const { index, tokenIndex, tokenValue, token } = parser;
            const expr = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
            if (index - tokenIndex < 13 && tokenValue === 'use strict') {
                if ((parser.token & 1048576) === 1048576 || parser.flags & 1) {
                    context |= 1024;
                    if (parser.flags & 128) {
                        reportAt(parser.index, parser.line, parser.tokenIndex, 66);
                    }
                    if (parser.flags & 64) {
                        reportAt(parser.index, parser.line, parser.tokenIndex, 8);
                    }
                }
            }
            body.push(parseDirective(parser, context, expr, token, tokenIndex, parser.linePos, parser.colPos));
        }
        if (context & 1024 &&
            firstRestricted &&
            ((firstRestricted & 537079808) === 537079808 ||
                (firstRestricted & 36864) === 36864)) {
            report(parser, 38);
        }
        if (context & 64 &&
            (prevContext & 1024) < 1 &&
            context & 1024 &&
            (context & 8192) === 0)
            verifyArguments(parser, scope.lexicals['$']);
    }
    while (parser.token !== -2146435057) {
        body.push(parseStatementListItem(parser, context, scope, {}, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    consume(parser, origin & (2 | 1) ? context | 32768 : context, -2146435057);
    parser.flags &= ~(128 | 64);
    if (parser.token === -2143289315)
        report(parser, 123);
    return finishNode(parser, context, tokenIndex, linePos, colPos, {
        type: 'BlockStatement',
        body
    });
}
function parseSuperExpression(parser, context, start, line, column) {
    nextToken(parser, context);
    switch (parser.token) {
        case 67174411: {
            if ((context & 524288) === 0)
                report(parser, 26);
            if (context & 268435456)
                report(parser, 151);
            parser.assignable = 2;
            break;
        }
        case 69271571:
        case 67108877: {
            if ((context & 262144) === 0)
                report(parser, 27);
            if (context & 268435456)
                report(parser, 151);
            parser.assignable = 1;
            break;
        }
        default:
            report(parser, 28, 'super');
    }
    return finishNode(parser, context, start, line, column, { type: 'Super' });
}
function parseLeftHandSideExpression(parser, context, allowAssign, inGroup, start, line, column) {
    const expression = parsePrimaryExpressionExtended(parser, context, 0, 0, allowAssign, 0, inGroup, start, line, column);
    return parseMemberOrUpdateExpression(parser, context, expression, 0, inGroup, start, line, column);
}
function parseMemberOrUpdateExpression(parser, context, expr, inNewExpression, inGroup, start, line, column) {
    if ((parser.token & 33619968) === 33619968 && (parser.flags & 1) === 0) {
        if (parser.assignable & 2)
            report(parser, 55);
        const { token } = parser;
        nextToken(parser, context);
        parser.assignable = 2;
        return finishNode(parser, context, start, line, column, {
            type: 'UpdateExpression',
            argument: expr,
            operator: KeywordDescTable[token & 255],
            prefix: false
        });
    }
    context = context & ~134217728;
    if ((parser.token & 67108864) === 67108864) {
        if (parser.token === 67108877) {
            nextToken(parser, context);
            if ((parser.token & (143360 | 4096)) === 0 && parser.token !== 131) {
                report(parser, 28, KeywordDescTable[parser.token & 255]);
            }
            parser.assignable = 1;
            const property = context & 1 && parser.token === 131
                ? parsePrivateName(parser, context, parser.tokenIndex, parser.linePos, parser.colPos)
                : parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
            expr = finishNode(parser, context, start, line, column, {
                type: 'MemberExpression',
                object: expr,
                computed: false,
                property
            });
        }
        else if (parser.token === 69271571) {
            nextToken(parser, context | 32768);
            const idxAfterLeftBracket = parser.tokenIndex;
            const lineAfterLeftBracket = parser.linePos;
            const columnAfterLeftBracket = parser.colPos;
            let property = parseExpression(parser, context, 1, 0, inGroup, idxAfterLeftBracket, lineAfterLeftBracket, columnAfterLeftBracket);
            if (parser.token === -1073741806)
                property = parseSequenceExpression(parser, context, idxAfterLeftBracket, lineAfterLeftBracket, columnAfterLeftBracket, property);
            consume(parser, context, 20);
            parser.assignable = 1;
            expr = finishNode(parser, context, start, line, column, {
                type: 'MemberExpression',
                object: expr,
                computed: true,
                property
            });
        }
        else if (inNewExpression) {
            parser.assignable = 2;
            return expr;
        }
        else if (parser.token === 67174411) {
            const args = parseArguments(parser, (context | 134217728) ^ 134217728, inGroup);
            parser.assignable = 2;
            expr = finishNode(parser, context, start, line, column, {
                type: 'CallExpression',
                callee: expr,
                arguments: args
            });
        }
        else {
            parser.assignable = 2;
            expr = finishNode(parser, context, parser.tokenIndex, parser.linePos, parser.colPos, {
                type: 'TaggedTemplateExpression',
                tag: expr,
                quasi: parser.token === 67174408
                    ? parseTemplate(parser, context | 65536, start, line, column)
                    : parseTemplateLiteral(parser, context, start, line, column)
            });
        }
        return parseMemberOrUpdateExpression(parser, context, expr, inNewExpression, 0, start, line, column);
    }
    else if (inNewExpression) {
        parser.assignable = 2;
    }
    return expr;
}
function parsePrimaryExpressionExtended(parser, context, type, inNewExpression, allowAssign, identifierPattern, inGroup, start, line, column) {
    const { token } = parser;
    if ((token & 16842752) === 16842752) {
        if (inNewExpression && (token !== 16863276 || token !== 16863274)) {
            report(parser, 65, KeywordDescTable[parser.token & 255]);
        }
        parser.assignable = 2;
        return parseUnaryExpression(parser, context, start, line, column, inGroup);
    }
    if ((token & 33619968) === 33619968) {
        if (inNewExpression)
            report(parser, 56);
        const { token } = parser;
        nextToken(parser, context | 32768);
        const arg = parseLeftHandSideExpression(parser, context, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        if (parser.assignable & 2) {
            report(parser, (parser.token & 537079808) === 537079808
                ? 116
                : 55);
        }
        parser.assignable = 2;
        return finishNode(parser, context, start, line, column, {
            type: 'UpdateExpression',
            argument: arg,
            operator: KeywordDescTable[token & 255],
            prefix: true
        });
    }
    if (token === 209005) {
        if (inGroup)
            parser.destructible |= 128;
        return parseAwaitExpressionOrIdentifier(parser, context, inNewExpression, start, line, column);
    }
    if (token === 241770) {
        if (inGroup)
            parser.destructible |= 256;
        if (allowAssign)
            return parseYieldExpressionOrIdentifier(parser, context, start, line, column);
        if (context & ((context & 2097152) | 1024))
            report(parser, 99, 'yield');
        return parseIdentifier(parser, context, 0, start, line, column);
    }
    if (parser.token === 268677192) {
        if (context & 1024)
            report(parser, 115);
        if (type & (8 | 16))
            report(parser, 64);
    }
    if (context & 268435456 && parser.token === 537079925) {
        report(parser, 134);
    }
    if ((token & 143360) === 143360) {
        const tokenValue = parser.tokenValue;
        const expr = parseIdentifier(parser, context | 65536, identifierPattern, start, line, column);
        if (token === 143468) {
            return parseAsyncExpression(parser, context, expr, inNewExpression, allowAssign, inGroup, start, line, column);
        }
        if (token === 143478)
            report(parser, 96);
        const IsEvalOrArguments = (token & 537079808) === 537079808;
        if (parser.token === 10) {
            if (IsEvalOrArguments) {
                if (context & 1024)
                    report(parser, 121);
                parser.flags |= 128;
            }
            else {
                parser.flags &= ~128;
            }
            if (!allowAssign)
                report(parser, 57);
            let scope = {};
            if (context & 64) {
                scope = inheritScope(initblockScope(), 16);
                declareAndDedupe(parser, context, scope, tokenValue, 1, 0);
            }
            return parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
        }
        parser.assignable =
            context & 1024 && IsEvalOrArguments ? 2 : 1;
        return expr;
    }
    if ((token & 134217728) === 134217728) {
        parser.assignable = 2;
        return parseLiteral(parser, context, start, line, column);
    }
    switch (token) {
        case 86103:
            return parseFunctionExpression(parser, context, 0, inGroup, start, line, column);
        case 2162700:
            return parseObjectLiteral(parser, context, allowAssign ? 0 : 1, inGroup, start, line, column);
        case 69271571:
            return parseArrayLiteral(parser, context, allowAssign ? 0 : 1, inGroup, start, line, column);
        case 67174411:
            return parseParenthesizedExpression(parser, context & ~134217728, allowAssign, start, line, column);
        case 131:
            return parsePrivateName(parser, context, start, line, column);
        case 133:
        case 86093:
            return parseClassExpression(parser, context, inGroup, start, line, column);
        case 65540:
            return parseRegExpLiteral(parser, context, start, line, column);
        case 86110:
            return parseThisExpression(parser, context, start, line, column);
        case 86021:
        case 86022:
        case 86023:
            return parseNullOrTrueOrFalseLiteral(parser, context, start, line, column);
        case 86108:
            return parseSuperExpression(parser, context, start, line, column);
        case 67174409:
            return parseTemplateLiteral(parser, context, start, line, column);
        case 67174408:
            return parseTemplate(parser, context, start, line, column);
        case 86106:
            return parseNewExpression(parser, context, inGroup, start, line, column);
        case 122:
            return parseBigIntLiteral(parser, context, start, line, column);
        case 86105:
            return parseImportCallExpression(parser, context, inNewExpression, inGroup, start, line, column);
        default:
            if (context & 1024
                ? (token & 143360) === 143360 || (token & 12288) === 12288
                : (token & 143360) === 143360 ||
                    (token & 12288) === 12288 ||
                    (token & 36864) === 36864) {
                return parseIdentifierOrArrow(parser, context, start, line, column);
            }
            report(parser, 28, KeywordDescTable[parser.token & 255]);
    }
}
function parseImportCallExpression(parser, context, inNewExpression, inGroup, start, line, column) {
    if (inNewExpression)
        report(parser, 145);
    nextToken(parser, context);
    let expr = parseImportExpression(parser, context, inGroup, start, line, column);
    expr = parseMemberOrUpdateExpression(parser, context, expr, 0, inGroup, start, line, column);
    parser.assignable = 2;
    return expr;
}
function parseImportExpression(parser, context, inGroup, start, line, column) {
    consume(parser, context, 67174411);
    if (parser.token === 14)
        report(parser, 146);
    const source = parseExpression(parser, context, 1, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context, 1073741840);
    return finishNode(parser, context, start, line, column, {
        type: 'ImportExpression',
        source
    });
}
function parseBigIntLiteral(parser, context, start, line, column) {
    const { tokenRaw, tokenValue } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, context & 512
        ? {
            type: 'BigIntLiteral',
            value: tokenValue,
            bigint: tokenRaw,
            raw: tokenRaw
        }
        : {
            type: 'BigIntLiteral',
            value: tokenValue,
            bigint: tokenRaw
        });
}
function parseTemplateLiteral(parser, context, start, line, column) {
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'TemplateLiteral',
        expressions: [],
        quasis: [parseTemplateTail(parser, context, start, line, column)]
    });
}
function parseTemplateTail(parser, context, start, line, column) {
    const { tokenValue, tokenRaw } = parser;
    consume(parser, context, 67174409);
    return finishNode(parser, context, start, line, column, {
        type: 'TemplateElement',
        value: {
            cooked: tokenValue,
            raw: tokenRaw
        },
        tail: true
    });
}
function parseTemplate(parser, context, start, line, column) {
    const quasis = [parseTemplateSpans(parser, context, false, start, line, column)];
    consume(parser, context | 32768, 67174408);
    const expressions = [parseExpressions(parser, context, 1, parser.tokenIndex, parser.linePos, parser.colPos)];
    if (parser.token !== -2146435057)
        report(parser, 84);
    while ((parser.token = scanTemplateTail(parser, context)) !== 67174409) {
        const { tokenIndex, linePos, colPos } = parser;
        quasis.push(parseTemplateSpans(parser, context, false, tokenIndex, linePos, colPos));
        consume(parser, context | 32768, 67174408);
        expressions.push(parseExpressions(parser, context, 1, tokenIndex, linePos, colPos));
    }
    quasis.push(parseTemplateSpans(parser, context, true, parser.tokenIndex, parser.linePos, parser.colPos));
    nextToken(parser, context);
    return finishNode(parser, context, start, line, column, {
        type: 'TemplateLiteral',
        expressions,
        quasis
    });
}
function parseTemplateSpans(parser, context, tail, start, line, column) {
    return finishNode(parser, context, start, line, column, {
        type: 'TemplateElement',
        value: {
            cooked: parser.tokenValue,
            raw: parser.tokenRaw
        },
        tail
    });
}
function parseArgumentSpread(parser, context, start, line, column) {
    consume(parser, context | 32768, 14);
    const argument = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    parser.assignable = 1;
    return finishNode(parser, context, start, line, column, {
        type: 'SpreadElement',
        argument
    });
}
function parseArguments(parser, context, inGroup) {
    nextToken(parser, context | 32768);
    const args = [];
    if (parser.token === 1073741840) {
        nextToken(parser, context);
        return args;
    }
    while (parser.token !== 1073741840) {
        if (parser.token === 14) {
            args.push(parseArgumentSpread(parser, context, parser.tokenIndex, parser.linePos, parser.colPos));
        }
        else {
            args.push(parseExpression(parser, context, 1, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos));
        }
        if (parser.token !== -1073741806)
            break;
        nextToken(parser, context | 32768);
        if (parser.token === 1073741840)
            break;
    }
    consume(parser, context, 1073741840);
    return args;
}
function parseIdentifier(parser, context, isPattern, start, line, column) {
    const { tokenValue } = parser;
    nextToken(parser, context);
    return finishNode(parser, context, start, line, column, context & 536870912
        ? {
            type: 'Identifier',
            name: tokenValue,
            pattern: isPattern === 1
        }
        : {
            type: 'Identifier',
            name: tokenValue
        });
}
function parseLiteral(parser, context, start, line, column) {
    const { tokenValue, tokenRaw } = parser;
    nextToken(parser, context);
    return finishNode(parser, context, start, line, column, context & 512
        ? {
            type: 'Literal',
            value: tokenValue,
            raw: tokenRaw
        }
        : {
            type: 'Literal',
            value: tokenValue
        });
}
function parseNullOrTrueOrFalseLiteral(parser, context, start, line, column) {
    const raw = KeywordDescTable[parser.token & 255];
    const value = parser.token === 86023 ? null : raw === 'true';
    nextToken(parser, context);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, context & 512
        ? {
            type: 'Literal',
            value,
            raw
        }
        : {
            type: 'Literal',
            value
        });
}
function parseThisExpression(parser, context, start, line, column) {
    nextToken(parser, context);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'ThisExpression'
    });
}
function parseFunctionDeclaration(parser, context, scope, allowGen, flags, isAsync, start, line, column) {
    nextToken(parser, context | 32768);
    const isGenerator = allowGen ? optionalBit(parser, context, 8456755) : 0;
    let id = null;
    let firstRestricted;
    let innerscope = context & 64 ? initblockScope() : {};
    if (parser.token === 67174411) {
        if ((flags & 1) === 0) {
            report(parser, 37, 'Function');
        }
        if (context & 64)
            addBindingToExports(parser, '');
    }
    else {
        const type = 4 - ((context & 0x1800) === 0x1000) * 8;
        validateBindingIdentifier(parser, context | ((context & 0xc00) << 11), type, parser.token, 0);
        if (context & 64) {
            if (!allowGen)
                scope = inheritScope(scope, 2);
            const mode = ((context & 8192) === 0 || (context & 2048) === 0) && context & 16384
                ? 4
                : 8;
            addFunctionName(parser, context, scope, parser.tokenValue, mode, 1);
            innerscope = inheritScope(innerscope, 2);
            if (flags) {
                if (flags & 1) {
                    addBindingToExports(parser, parser.tokenValue);
                }
                else {
                    updateExportsList(parser, parser.tokenValue);
                }
            }
        }
        firstRestricted = parser.token;
        id = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    context = ((context | 0x1ec0000) ^ 0x1ec0000) | 67108864 | ((isAsync * 2 + isGenerator) << 21);
    if (context & 64)
        innerscope = inheritScope(innerscope, 16);
    const params = parseFormalParametersOrFormalList(parser, context | 8388608, innerscope, 0, 1);
    const body = parseFunctionBody(parser, (context | 0x8001000 | 8192 | 4096 | 131072) ^
        (0x8001000 | 8192 | 4096 | 131072), context & 64 ? inheritScope(innerscope, 2) : innerscope, 1, firstRestricted);
    return finishNode(parser, context, start, line, column, {
        type: 'FunctionDeclaration',
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1,
        id
    });
}
function parseFunctionExpression(parser, context, isAsync, inGroup, start, line, column) {
    nextToken(parser, context | 32768);
    const isGenerator = optionalBit(parser, context, 8456755);
    const generatorAndAsyncFlags = (isAsync * 2 + isGenerator) << 21;
    let id = null;
    let firstRestricted;
    let scope = context & 64 ? initblockScope() : {};
    if ((parser.token & (143360 | 4096 | 36864)) > 0) {
        validateBindingIdentifier(parser, ((context | 0x1ec0000) ^ 0x1ec0000) | generatorAndAsyncFlags, 4, parser.token, 0);
        if (context & 64) {
            declareAndDedupe(parser, context, scope, parser.tokenValue, 4, 1);
            scope = inheritScope(scope, 2);
        }
        firstRestricted = parser.token;
        id = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    context = ((context | 0x1ec0000) ^ 0x1ec0000) | 67108864 | generatorAndAsyncFlags;
    if (context & 64)
        scope = inheritScope(scope, 16);
    const params = parseFormalParametersOrFormalList(parser, context | 8388608, scope, inGroup, 1);
    const body = parseFunctionBody(parser, context &
        ~(0x8001000 | 8192 | 16384 | 4096 | 131072 | 268435456),  inheritScope(scope, 2) , 0, firstRestricted);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'FunctionExpression',
        params,
        body,
        async: isAsync === 1,
        generator: isGenerator === 1,
        id
    });
}
function parseArrayLiteral(parser, context, skipInitializer, inGroup, start, line, column) {
    const expr = parseArrayExpressionOrPattern(parser, context, null, skipInitializer, inGroup, 0, 0, start, line, column);
    if (context & 256 && parser.destructible & 64) {
        report(parser, 63);
    }
    if (parser.destructible & 8) {
        report(parser, 62);
    }
    return expr;
}
function parseArrayExpressionOrPattern(parser, context, scope, skipInitializer, inGroup, type, origin, start, line, column) {
    nextToken(parser, context | 32768);
    const elements = [];
    let destructible = 0;
    context = context & ~134217728;
    while (parser.token !== 20) {
        if (consumeOpt(parser, context | 32768, -1073741806)) {
            elements.push(null);
        }
        else {
            let left;
            const { token, tokenIndex, linePos, colPos, tokenValue } = parser;
            if (token & 143360) {
                left = parsePrimaryExpressionExtended(parser, context, type, 0, 1, 0, inGroup, tokenIndex, linePos, colPos);
                if (consumeOpt(parser, context | 32768, -2143289315)) {
                    if (parser.assignable & 2) {
                        reportAt(parser.index, parser.line, parser.index - 3, 24);
                    }
                    else if (context & 64) {
                        declareName(parser, context, scope, tokenValue, type, 0, 0);
                        if (origin & 16) {
                            updateExportsList(parser, tokenValue);
                            addBindingToExports(parser, tokenValue);
                        }
                    }
                    const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                    left = finishNode(parser, context, tokenIndex, linePos, colPos, {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left,
                        right
                    });
                }
                else if (parser.token === -1073741806 || parser.token === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    }
                    else if (context & 64) {
                        declareName(parser, context, scope, tokenValue, type, 0, 0);
                        if (origin & 16) {
                            updateExportsList(parser, tokenValue);
                            addBindingToExports(parser, tokenValue);
                        }
                    }
                }
                else {
                    if (type)
                        destructible |= 16;
                    left = parseMemberOrUpdateExpression(parser, context, left, 0, inGroup, tokenIndex, linePos, colPos);
                    if (parser.assignable & 2)
                        destructible |= 16;
                    if (parser.token !== -1073741806 && parser.token !== 20) {
                        if (parser.token !== -2143289315)
                            destructible |= 16;
                        left = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, left);
                    }
                    else if (parser.token !== -2143289315) {
                        destructible |=
                            type || parser.assignable & 2
                                ? 16
                                : 32;
                    }
                }
                destructible |=
                    parser.destructible & 256
                        ? 256
                        : 0 | (parser.destructible & 128)
                            ? 128
                            : 0;
            }
            else if (token & 2097152) {
                left =
                    parser.token === 2162700
                        ? parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, type, origin, tokenIndex, linePos, colPos)
                        : parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, type, origin, tokenIndex, linePos, colPos);
                destructible |= parser.destructible;
                parser.assignable =
                    parser.destructible & 16
                        ? 2
                        : 1;
                if (parser.token === -1073741806 || parser.token === 20) {
                    if (parser.assignable & 2) {
                        destructible |= 16;
                    }
                }
                else if (parser.destructible & 8) {
                    report(parser, 71);
                }
                else {
                    left = parseMemberOrUpdateExpression(parser, context, left, 0, inGroup, tokenIndex, linePos, colPos);
                    destructible = parser.assignable & 2 ? 16 : 0;
                    if (parser.token !== -1073741806 && parser.token !== 20) {
                        left = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, left);
                    }
                    else if (parser.token !== -2143289315) {
                        destructible |=
                            type || parser.assignable & 2
                                ? 16
                                : 32;
                    }
                }
            }
            else if (token === 14) {
                left = parseSpreadElement(parser, context, scope, 20, type, origin, 0, inGroup, tokenIndex, linePos, colPos);
                destructible |= parser.destructible;
                if (parser.token !== -1073741806 && parser.token !== 20)
                    report(parser, 28, KeywordDescTable[parser.token & 255]);
            }
            else {
                left = parseLeftHandSideExpression(parser, context, 1, 0, tokenIndex, linePos, colPos);
                if (parser.token !== -1073741806 && parser.token !== 20) {
                    left = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, left);
                    if (type && token === 67174411)
                        destructible |= 16;
                }
                else if (parser.assignable & 2) {
                    destructible |= 16;
                }
                else if (token === 67174411) {
                    destructible |=
                        parser.assignable & 1 && !type
                            ? 32
                            : token === 67174411 || parser.assignable & 2
                                ? 16
                                : 0;
                }
            }
            elements.push(left);
            if (consumeOpt(parser, context | 32768, -1073741806)) {
                if (parser.token === 20)
                    break;
            }
            else
                break;
        }
    }
    consume(parser, context, 20);
    const node = finishNode(parser, context, start, line, column, {
        type: 'ArrayExpression',
        elements
    });
    if (!skipInitializer && parser.token & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, start, line, column, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, start, line, column, node) {
    if (parser.token !== -2143289315)
        report(parser, 24);
    nextToken(parser, context | 32768);
    if (destructible & 16)
        report(parser, 24);
    reinterpretToPattern(parser, node);
    const { tokenIndex, linePos, colPos } = parser;
    const right = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 1, inGroup, tokenIndex, linePos, colPos);
    parser.destructible =
        ((destructible | 64 | 8) ^
            (8 | 64)) |
            (parser.destructible & 128 ? 128 : 0) |
            (parser.destructible & 256 ? 256 : 0);
    return finishNode(parser, context, start, line, column, {
        type: 'AssignmentExpression',
        left: node,
        operator: '=',
        right
    });
}
function parseSpreadElement(parser, context, scope, closingToken, type, origin, isAsync, inGroup, start, line, column) {
    nextToken(parser, context | 32768);
    let argument;
    let destructible = 0;
    const { tokenIndex, linePos, colPos } = parser;
    if (parser.token & (4096 | 143360)) {
        parser.assignable = 1;
        const tokenValue = parser.tokenValue;
        argument = parsePrimaryExpressionExtended(parser, context, type, 0, 1, 0, inGroup, tokenIndex, linePos, colPos);
        const { token } = parser;
        argument = parseMemberOrUpdateExpression(parser, context, argument, 0, inGroup, tokenIndex, linePos, colPos);
        if (parser.token !== -1073741806 && parser.token !== closingToken) {
            if (parser.assignable & 2 && parser.token === -2143289315)
                report(parser, 71);
            destructible |= 16;
            argument = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, argument);
        }
        if (parser.assignable & 2) {
            destructible |= 16;
        }
        else if (token === closingToken || token === -1073741806) {
            if (context & 64) {
                declareName(parser, context, scope, tokenValue, type, 0, 0);
                if (origin & 16) {
                    updateExportsList(parser, tokenValue);
                    addBindingToExports(parser, tokenValue);
                }
            }
        }
        else {
            destructible |= 32;
        }
        destructible |= parser.destructible & 128 ? 128 : 0;
    }
    else if (parser.token === closingToken) {
        report(parser, 39);
    }
    else if (parser.token & 2097152) {
        argument =
            parser.token === 2162700
                ? parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, type, origin, tokenIndex, linePos, colPos)
                : parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, type, origin, tokenIndex, linePos, colPos);
        const { token } = parser;
        if (token !== -2143289315 && token !== closingToken && token !== -1073741806) {
            if (parser.destructible & 8)
                report(parser, 71);
            argument = parseMemberOrUpdateExpression(parser, context, argument, 0, inGroup, tokenIndex, linePos, colPos);
            destructible |= parser.assignable & 2 ? 16 : 0;
            const { token } = parser;
            if (parser.token !== -1073741806 && parser.token !== closingToken) {
                argument = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, argument);
                if (token !== -2143289315)
                    destructible |= 16;
            }
            else if (token !== -2143289315) {
                destructible |=
                    type || parser.assignable & 2
                        ? 16
                        : 32;
            }
        }
        else {
            destructible |=
                closingToken === -2146435057 && token !== -2143289315
                    ? 16
                    : parser.destructible;
        }
    }
    else {
        if (type)
            report(parser, 40);
        argument = parseLeftHandSideExpression(parser, context, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
        const { token, tokenIndex } = parser;
        if (token === -2143289315 && token !== closingToken && token !== -1073741806) {
            if (parser.assignable & 2)
                report(parser, 40);
            argument = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, argument);
            destructible |= 16;
        }
        else {
            if (token === -1073741806) {
                destructible |= 16;
            }
            else if (token !== closingToken) {
                argument = parseAssignmentExpression(parser, context, inGroup, tokenIndex, linePos, colPos, argument);
            }
            destructible |=
                parser.assignable & 1
                    ? 32
                    : 16;
        }
        parser.destructible = destructible;
        return finishNode(parser, context, start, line, column, {
            type: 'SpreadElement',
            argument
        });
    }
    if (parser.token !== closingToken) {
        if (!isAsync && type & 1) {
            report(parser, parser.token === -1073741806
                ? 58
                : parser.token === -2143289315
                    ? 72
                    : 73);
        }
        if (consumeOpt(parser, context | 32768, -2143289315)) {
            if (destructible & 16)
                report(parser, 24);
            reinterpretToPattern(parser, argument);
            const right = parseExpression(parser, context, 1, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
            argument = finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'AssignmentExpression',
                left: argument,
                operator: '=',
                right
            });
            destructible = 16;
        }
        destructible |= 16;
    }
    parser.destructible = destructible;
    return finishNode(parser, context, start, line, column, {
        type: 'SpreadElement',
        argument
    });
}
function parseMethodDefinition(parser, context, kind, inGroup, start, line, column) {
    context =
        (context & ~((kind & 64) === 0 ? 0x1e80000 : 0xe00000)) | ((kind & 0x58) << 18) | 0x6040000;
    let scope = context & 64 ? inheritScope(initblockScope(), 16) : {};
    const params = parseMethodFormals(parser, context | 8388608, scope, kind, 1, inGroup);
    if (context & 64)
        scope = inheritScope(scope, 2);
    const body = parseFunctionBody(parser, context & ~(0x8001000 | 8192), scope, 0, void 0);
    return finishNode(parser, context, start, line, column, {
        type: 'FunctionExpression',
        params,
        body,
        async: (kind & 16) > 0,
        generator: (kind & 8) > 0,
        id: null
    });
}
function parseObjectLiteral(parser, context, skipInitializer, inGroup, start, line, column) {
    const expr = parseObjectLiteralOrPattern(parser, context, null, skipInitializer, inGroup, 0, 0, start, line, column);
    if (context & 256 && parser.destructible & 64) {
        report(parser, 63);
    }
    if (parser.destructible & 8) {
        report(parser, 62);
    }
    return expr;
}
function parseObjectLiteralOrPattern(parser, context, scope, skipInitializer, inGroup, type, origin, start, line, column) {
    nextToken(parser, context);
    const properties = [];
    let destructible = 0;
    let prototypeCount = 0;
    while (parser.token !== -2146435057) {
        const { token, tokenValue, linePos, colPos, tokenIndex } = parser;
        if (token === 14) {
            properties.push(parseSpreadElement(parser, context, scope, -2146435057, type, origin, 0, inGroup, tokenIndex, linePos, colPos));
        }
        else {
            let state = 0;
            let key = null;
            let value;
            if (parser.token & (143360 | (parser.token & 4096))) {
                key = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
                if (parser.token === -1073741806 || parser.token === -2146435057 || parser.token === -2143289315) {
                    state |= 4;
                    if ((token & 537079808) === 537079808) {
                        if (context & 1024)
                            destructible |= 16;
                    }
                    else {
                        validateBindingIdentifier(parser, context, type, token, 0);
                    }
                    if (context & 64) {
                        declareName(parser, context, scope, tokenValue, type, 0, 0);
                        if (origin & 16) {
                            updateExportsList(parser, tokenValue);
                            addBindingToExports(parser, tokenValue);
                        }
                    }
                    if (consumeOpt(parser, context | 32768, -2143289315)) {
                        destructible |= 8;
                        const right = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                        destructible |=
                            parser.destructible & 256
                                ? 256
                                : 0 | (parser.destructible & 128)
                                    ? 128
                                    : 0;
                        value = finishNode(parser, context, tokenIndex, linePos, colPos, {
                            type: 'AssignmentPattern',
                            left: key,
                            right
                        });
                    }
                    else {
                        destructible |= token === 209005 ? 128 : 0;
                        value = key;
                    }
                }
                else if (consumeOpt(parser, context | 32768, 21)) {
                    const idxAfterColon = parser.tokenIndex;
                    const lineAfterColon = parser.linePos;
                    const columnAfterColon = parser.colPos;
                    if (tokenValue === '__proto__')
                        prototypeCount++;
                    if (parser.token & 143360) {
                        const tokenAfterColon = parser.token;
                        const valueAfterColon = parser.tokenValue;
                        value = parsePrimaryExpressionExtended(parser, context, type, 0, 1, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                        const { token } = parser;
                        value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (token === -2143289315 || token === -2146435057 || token === -1073741806) {
                                destructible |= parser.destructible & 128 ? 128 : 0;
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                }
                                else if (context & 64 &&
                                    (tokenAfterColon & 143360) === 143360) {
                                    declareName(parser, context, scope, valueAfterColon, type, 0, 0);
                                }
                            }
                            else {
                                destructible |=
                                    parser.assignable & 1
                                        ? 32
                                        : 16;
                            }
                        }
                        else if (parser.token === -2143289315) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                            else if (token !== -2143289315) {
                                destructible |= 32;
                            }
                            else if (context & 64) {
                                declareName(parser, context, scope, valueAfterColon, type, 0, 0);
                            }
                            value = parseAssignmentExpression(parser, context, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                        }
                        else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                        }
                    }
                    else if ((parser.token & 2097152) === 2097152) {
                        value =
                            parser.token === 69271571
                                ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, type, origin, idxAfterColon, lineAfterColon, columnAfterColon)
                                : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, type, origin, idxAfterColon, lineAfterColon, columnAfterColon);
                        destructible = parser.destructible;
                        parser.assignable =
                            destructible & 16
                                ? 2
                                : 1;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2)
                                destructible |= 16;
                        }
                        else if (parser.destructible & 8) {
                            report(parser, 71);
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            const { token } = parser;
                            if (token !== -1073741806 && token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context & ~134217728, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                                if (token !== -2143289315)
                                    destructible |= 16;
                            }
                            else if (token !== -2143289315) {
                                destructible |=
                                    type || parser.assignable & 2
                                        ? 16
                                        : 32;
                            }
                        }
                    }
                    else {
                        value = parseLeftHandSideExpression(parser, context, 1, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                        destructible |=
                            parser.assignable & 1
                                ? 32
                                : 16;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2)
                                destructible |= 16;
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            const { token } = parser;
                            if (token !== -1073741806 && token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context & ~134217728, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                                if (token !== -2143289315)
                                    destructible |= 16;
                            }
                        }
                    }
                }
                else if (parser.token === 69271571) {
                    destructible |= 16;
                    if (token === 143468)
                        state |= 16;
                    state |=
                        (token === 12399
                            ? 256
                            : token === 12400
                                ? 512
                                : 1) | 2;
                    key = parseComputedPropertyName(parser, context, inGroup);
                    destructible |= parser.assignable;
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else if (parser.token & (143360 | 4096)) {
                    destructible |= 16;
                    if (token === 143468) {
                        if (parser.flags & 1)
                            report(parser, 136);
                        state |= 16;
                    }
                    key = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                    if (token === 143478)
                        report(parser, 120);
                    state |=
                        token === 12399
                            ? 256
                            : token === 12400
                                ? 512
                                : 1;
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else if (parser.token === 67174411) {
                    destructible |= 16;
                    state |= 1;
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else if (parser.token === 8456755) {
                    destructible |= 16;
                    if (token === 143478)
                        report(parser, 22);
                    if (token === 12399 || token === 12400) {
                        report(parser, 41);
                    }
                    nextToken(parser, context);
                    state |=
                        8 | 1 | (token === 143468 ? 16 : 0);
                    if (parser.token & 143360) {
                        key = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                    }
                    else if ((parser.token & 134217728) === 134217728) {
                        key = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
                    }
                    else if (parser.token === 69271571) {
                        state |= 2;
                        key = parseComputedPropertyName(parser, context, inGroup);
                        destructible |= parser.assignable;
                    }
                    else {
                        report(parser, 28, KeywordDescTable[parser.token & 255]);
                    }
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else if ((parser.token & 134217728) === 134217728) {
                    if (token === 143468)
                        state |= 16;
                    state |=
                        token === 12399
                            ? 256
                            : token === 12400
                                ? 512
                                : 1;
                    destructible |= 16;
                    key = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else {
                    report(parser, 137);
                }
            }
            else if ((parser.token & 134217728) === 134217728) {
                key = parseLiteral(parser, context, tokenIndex, linePos, colPos);
                if (parser.token === 21) {
                    consume(parser, context | 32768, 21);
                    const idxAfterColon = parser.tokenIndex;
                    const lineAfterColon = parser.linePos;
                    const columnAfterColon = parser.colPos;
                    if (tokenValue === '__proto__')
                        prototypeCount++;
                    if (parser.token & 143360) {
                        value = parsePrimaryExpressionExtended(parser, context, type, 0, 1, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                        const { token, tokenValue: tv } = parser;
                        value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (token === -2143289315 || token === -2146435057 || token === -1073741806) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                }
                                else if (context & 64) {
                                    declareName(parser, context, scope, tv, type, 0, 0);
                                }
                            }
                            else {
                                destructible |=
                                    parser.assignable & 1
                                        ? 32
                                        : 16;
                            }
                        }
                        else if (parser.token === -2143289315) {
                            if (parser.assignable & 2)
                                destructible |= 16;
                            value = parseAssignmentExpression(parser, context & ~134217728, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                        }
                        else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, context & ~134217728, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                        }
                    }
                    else if ((parser.token & 2097152) === 2097152) {
                        value =
                            parser.token === 69271571
                                ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, type, origin, idxAfterColon, lineAfterColon, columnAfterColon)
                                : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, type, origin, idxAfterColon, lineAfterColon, columnAfterColon);
                        destructible = parser.destructible;
                        parser.assignable =
                            destructible & 16
                                ? 2
                                : 1;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        }
                        else if (parser.destructible & 8) {
                            report(parser, 71);
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                            destructible = parser.assignable & 2 ? 16 : 0;
                            if (parser.token !== -1073741806 && parser.token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                            }
                            else if (parser.token !== -2143289315) {
                                destructible |=
                                    type || parser.assignable & 2
                                        ? 16
                                        : 32;
                            }
                        }
                    }
                    else {
                        value = parseLeftHandSideExpression(parser, context, 1, 0, idxAfterColon, lineAfterColon, columnAfterColon);
                        destructible |=
                            parser.assignable & 1
                                ? 32
                                : 16;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2) {
                                destructible |= 16;
                            }
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, idxAfterColon, lineAfterColon, columnAfterColon);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            const { token } = parser;
                            if (parser.token !== -1073741806 && parser.token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context & ~134217728, inGroup, idxAfterColon, lineAfterColon, columnAfterColon, value);
                                if (token !== -2143289315)
                                    destructible |= 16;
                            }
                        }
                    }
                }
                else if (parser.token === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                    destructible = parser.assignable | 16;
                }
                else {
                    report(parser, 138);
                }
            }
            else if (parser.token === 69271571) {
                key = parseComputedPropertyName(parser, context, inGroup);
                destructible |= parser.destructible & 256 ? 256 : 0;
                state |= 2;
                if (parser.token === 21) {
                    nextToken(parser, context | 32768);
                    const { tokenIndex, linePos, colPos, tokenValue, token: tokenAfterColon } = parser;
                    if (parser.token & 143360) {
                        value = parsePrimaryExpressionExtended(parser, context, type, 0, 1, 0, inGroup, tokenIndex, linePos, colPos);
                        const { token } = parser;
                        value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, tokenIndex, linePos, colPos);
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (token === -2143289315 || token === -2146435057 || token === -1073741806) {
                                if (parser.assignable & 2) {
                                    destructible |= 16;
                                }
                                else if (context & 64 &&
                                    (tokenAfterColon & 143360) === 143360) {
                                    declareName(parser, context, scope, tokenValue, type, 0, 0);
                                }
                            }
                            else {
                                destructible |=
                                    parser.assignable & 1
                                        ? 32
                                        : 16;
                            }
                        }
                        else if (parser.token === -2143289315) {
                            destructible |=
                                parser.assignable & 2
                                    ? 16
                                    : token === -2143289315
                                        ? 0
                                        : 32;
                            value = parseAssignmentExpression(parser, (context | 134217728) ^ 134217728, inGroup, tokenIndex, linePos, colPos, value);
                        }
                        else {
                            destructible |= 16;
                            value = parseAssignmentExpression(parser, (context | 134217728) ^ 134217728, inGroup, tokenIndex, linePos, colPos, value);
                        }
                    }
                    else if ((parser.token & 2097152) === 2097152) {
                        value =
                            parser.token === 69271571
                                ? parseArrayExpressionOrPattern(parser, context, scope, 0, inGroup, type, origin, tokenIndex, linePos, colPos)
                                : parseObjectLiteralOrPattern(parser, context, scope, 0, inGroup, type, origin, tokenIndex, linePos, colPos);
                        destructible = parser.destructible;
                        parser.assignable =
                            destructible & 16
                                ? 2
                                : 1;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2)
                                destructible |= 16;
                        }
                        else if (destructible & 8) {
                            report(parser, 62);
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, tokenIndex, linePos, colPos);
                            destructible =
                                parser.assignable & 2 ? destructible | 16 : 0;
                            const { token } = parser;
                            if (parser.token !== -1073741806 && parser.token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context & ~134217728, inGroup, tokenIndex, linePos, colPos, value);
                                if (token !== -2143289315)
                                    destructible |= 16;
                            }
                            else if (token !== -2143289315) {
                                destructible |=
                                    type || parser.assignable & 2
                                        ? 16
                                        : 32;
                            }
                        }
                    }
                    else {
                        value = parseLeftHandSideExpression(parser, context, 1, 0, tokenIndex, linePos, colPos);
                        destructible |=
                            parser.assignable & 1
                                ? 32
                                : 16;
                        if (parser.token === -1073741806 || parser.token === -2146435057) {
                            if (parser.assignable & 2)
                                destructible |= 16;
                        }
                        else {
                            value = parseMemberOrUpdateExpression(parser, context, value, 0, inGroup, tokenIndex, linePos, colPos);
                            destructible = parser.assignable & 1 ? 0 : 16;
                            const { token } = parser;
                            if (parser.token !== -1073741806 && parser.token !== -2146435057) {
                                value = parseAssignmentExpression(parser, context & ~134217728, inGroup, tokenIndex, linePos, colPos, value);
                                if (token !== -2143289315)
                                    destructible |= 16;
                            }
                        }
                    }
                }
                else if (parser.token === 67174411) {
                    state |= 1;
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, linePos, colPos);
                    destructible = 16;
                }
                else {
                    report(parser, 42);
                }
            }
            else if (token === 8456755) {
                consume(parser, context | 32768, 8456755);
                state |= 8;
                if (parser.token & 143360) {
                    const { token, line, index } = parser;
                    key = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
                    state |= 1;
                    if (parser.token === 67174411) {
                        destructible |= 16;
                        value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                    }
                    else {
                        reportAt(index, line, index, token === 143468
                            ? 44
                            : token === 12399 || parser.token === 12400
                                ? 43
                                : 45, KeywordDescTable[token & 255]);
                    }
                }
                else if ((parser.token & 134217728) === 134217728) {
                    destructible |= 16;
                    key = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
                    state |= 1;
                    value = parseMethodDefinition(parser, context, state, inGroup, tokenIndex, linePos, colPos);
                }
                else if (parser.token === 69271571) {
                    destructible |= 16;
                    state |= 2 | 1;
                    key = parseComputedPropertyName(parser, context, inGroup);
                    value = parseMethodDefinition(parser, context, state, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
                }
                else {
                    report(parser, 130);
                }
            }
            else {
                report(parser, 28, KeywordDescTable[token & 255]);
            }
            destructible |= parser.destructible & 128 ? 128 : 0;
            parser.destructible = destructible;
            properties.push(finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'Property',
                key: key,
                value,
                kind: !(state & 768) ? 'init' : state & 512 ? 'set' : 'get',
                computed: (state & 2) > 0,
                method: (state & 1) > 0,
                shorthand: (state & 4) > 0
            }));
        }
        destructible |= parser.destructible;
        if (parser.token !== -1073741806)
            break;
        nextToken(parser, context);
    }
    consume(parser, context, -2146435057);
    if (prototypeCount > 1)
        destructible |= 64;
    const node = finishNode(parser, context, start, line, column, {
        type: 'ObjectExpression',
        properties
    });
    if (!skipInitializer && parser.token & 4194304) {
        return parseArrayOrObjectAssignmentPattern(parser, context, destructible, inGroup, start, line, column, node);
    }
    parser.destructible = destructible;
    return node;
}
function parseMethodFormals(parser, context, scope, kind, type, inGroup) {
    consume(parser, context, 67174411);
    const params = [];
    parser.flags &= ~128;
    let setterArgs = 0;
    if (parser.token === 1073741840) {
        if (kind & 512) {
            report(parser, 35, 'Setter', 'one', '');
        }
        nextToken(parser, context);
        return params;
    }
    if (kind & 256) {
        report(parser, 35, 'Getter', 'no', 's');
    }
    if (kind & 512 && parser.token === 14) {
        report(parser, 36);
    }
    while (parser.token !== 1073741840) {
        let left;
        const { tokenIndex, tokenValue, linePos, colPos } = parser;
        if (parser.token & 143360) {
            if ((context & 1024) === 0 &&
                ((parser.token & 36864) === 36864 ||
                    (parser.token & 537079808) === 537079808)) {
                parser.flags |= 128;
            }
            if (context & 64) {
                declareName(parser, context, scope, tokenValue, type, 0, 0);
            }
            left = parseAndClassifyIdentifier(parser, context, type, tokenIndex, linePos, colPos);
        }
        else {
            if (parser.token === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, type, 0, tokenIndex, linePos, colPos);
            }
            else if (parser.token === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, type, 0, tokenIndex, linePos, colPos);
            }
            else if (parser.token === 14) {
                left = parseSpreadElement(parser, context, scope, 1073741840, type, 0, 0, inGroup, tokenIndex, linePos, colPos);
            }
            parser.flags |= 128;
            reinterpretToPattern(parser, left);
            if (parser.destructible & 16)
                report(parser, 50);
            if (type && parser.destructible & 32)
                report(parser, 50);
        }
        if (parser.token === -2143289315) {
            nextToken(parser, context | 32768);
            parser.flags |= 128;
            const right = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 1, 0, parser.tokenIndex, parser.linePos, parser.colPos);
            left = finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'AssignmentPattern',
                left,
                right
            });
        }
        setterArgs++;
        params.push(left);
        if (parser.token !== 1073741840)
            consume(parser, context, -1073741806);
    }
    if (kind & 512 && setterArgs !== 1) {
        report(parser, 35, 'Setter', 'one', '');
    }
    if (context & 64)
        verifyArguments(parser, scope.lexicals);
    consume(parser, context, 1073741840);
    return params;
}
function parseComputedPropertyName(parser, context, inGroup) {
    nextToken(parser, context | 32768);
    const key = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
    consume(parser, context, 20);
    return key;
}
function parseParenthesizedExpression(parser, context, assignable, start, line, column) {
    parser.flags &= ~128;
    nextToken(parser, context | 32768);
    const scope = context & 64 ? inheritScope(initblockScope(), 16) : {};
    if (consumeOpt(parser, context, 1073741840)) {
        if (!assignable)
            report(parser, 28, KeywordDescTable[parser.token & 255]);
        return parseArrowFunctionExpression(parser, context, scope, [], 0, start, line, column);
    }
    let destructible = 0;
    parser.destructible &= ~(256 | 128);
    let expr;
    let expressions = [];
    let toplevelComma = 0;
    let isComplex = 0;
    const idxStart = parser.tokenIndex;
    const lineStart = parser.linePos;
    const columnStart = parser.colPos;
    parser.assignable = 1;
    while (parser.token !== 1073741840) {
        const { token, tokenIndex, linePos, colPos } = parser;
        if (token & (143360 | 4096)) {
            if (context & 64) {
                declareName(parser, context, scope, parser.tokenValue, 1, 0, 0);
            }
            expr = parsePrimaryExpressionExtended(parser, context, 0, 0, 1, 0, 1, tokenIndex, linePos, colPos);
            if ((parser.token & 1073741824) === 1073741824) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isComplex = 1;
                }
                else if ((token & 537079808) === 537079808 ||
                    (token & 36864) === 36864) {
                    isComplex = 1;
                }
            }
            else {
                if (parser.token === -2143289315) {
                    isComplex = 1;
                }
                else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 1, tokenIndex, linePos, colPos);
                if ((parser.token & 1073741824) !== 1073741824) {
                    expr = parseAssignmentExpression(parser, context, 1, tokenIndex, linePos, colPos, expr);
                }
            }
        }
        else if (token & 2097152) {
            expr =
                token === 2162700
                    ? parseObjectLiteralOrPattern(parser, context, scope, 0, 1, 0, 0, tokenIndex, linePos, colPos)
                    : parseArrayExpressionOrPattern(parser, context, scope, 0, 1, 0, 0, tokenIndex, linePos, colPos);
            destructible |= parser.destructible;
            isComplex = 1;
            parser.assignable = 2;
            if ((parser.token & 1073741824) !== 1073741824) {
                if (destructible & 8)
                    report(parser, 125);
                expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, tokenIndex, linePos, colPos);
                destructible |= 16;
                if ((parser.token & 1073741824) !== 1073741824) {
                    expr = parseAssignmentExpression(parser, context, 0, tokenIndex, linePos, colPos, expr);
                }
            }
        }
        else if (token === 14) {
            expr = parseSpreadElement(parser, context, scope, 1073741840, 1, 0, 0, 1, tokenIndex, linePos, colPos);
            if (parser.destructible & 16)
                report(parser, 74);
            isComplex = 1;
            if (toplevelComma && (parser.token & 1073741824) === 1073741824) {
                expressions.push(expr);
            }
            destructible |= 8;
            break;
        }
        else {
            destructible |= 16;
            expr = parseExpression(parser, context, 1, 0, 1, tokenIndex, linePos, colPos);
            if (toplevelComma && (parser.token & 1073741824) === 1073741824) {
                expressions.push(expr);
            }
            if (parser.token === -1073741806) {
                if (!toplevelComma) {
                    toplevelComma = 1;
                    expressions = [expr];
                }
            }
            if (toplevelComma) {
                while (consumeOpt(parser, context | 32768, -1073741806)) {
                    expressions.push(parseExpression(parser, context, 1, 0, 1, parser.tokenIndex, parser.linePos, parser.colPos));
                }
                parser.assignable = 2;
                expr = finishNode(parser, context, idxStart, lineStart, columnStart, {
                    type: 'SequenceExpression',
                    expressions
                });
            }
            consume(parser, context, 1073741840);
            parser.destructible = destructible;
            return expr;
        }
        if (toplevelComma && (parser.token & 1073741824) === 1073741824) {
            expressions.push(expr);
        }
        if (!consumeOpt(parser, context | 32768, -1073741806))
            break;
        if (!toplevelComma) {
            toplevelComma = 1;
            expressions = [expr];
        }
        if (parser.token === 1073741840) {
            destructible |= 8;
            break;
        }
    }
    if (toplevelComma) {
        parser.assignable = 2;
        expr = finishNode(parser, context, idxStart, lineStart, columnStart, {
            type: 'SequenceExpression',
            expressions
        });
    }
    consume(parser, context, 1073741840);
    if (destructible & 16 && destructible & 8)
        report(parser, 153);
    destructible |=
        parser.destructible & 256
            ? 256
            : 0 | (parser.destructible & 128)
                ? 128
                : 0;
    if (parser.token === 10) {
        if (isComplex)
            parser.flags |= 128;
        if (!assignable)
            report(parser, 48);
        if (destructible & 16)
            report(parser, 48);
        if (destructible & 32)
            report(parser, 49);
        if (context & (4194304 | 2048) && destructible & 128)
            report(parser, 29);
        if (context & (1024 | 2097152) && destructible & 256) {
            report(parser, 30);
        }
        if (context & 64)
            checkConflictingLexicalDeclarations(parser, context, scope, 0);
        return parseArrowFunctionExpression(parser, context, scope, toplevelComma ? expressions : [expr], 0, start, line, column);
    }
    else if (destructible & 8) {
        report(parser, 147);
    }
    parser.destructible = ((parser.destructible | 256) ^ 256) | destructible;
    return context & 128
        ? finishNode(parser, context, idxStart, lineStart, columnStart, {
            type: 'ParenthesizedExpression',
            expression: expr
        })
        : expr;
}
function parseIdentifierOrArrow(parser, context, start, line, column) {
    const { tokenValue } = parser;
    const expr = parseIdentifier(parser, context, 0, start, line, column);
    parser.assignable = 1;
    if (parser.token === 10) {
        let scope = {};
        if (context & 64) {
            scope = inheritScope(initblockScope(), 16);
            declareAndDedupe(parser, context, scope, tokenValue, 1, 0);
        }
        parser.flags &= ~128;
        return parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
    }
    return expr;
}
function parseArrowFunctionExpression(parser, context, scope, params, isAsync, start, line, column) {
    if (parser.flags & 1)
        report(parser, 46);
    consume(parser, context | 32768, 10);
    for (let i = 0; i < params.length; ++i)
        reinterpretToPattern(parser, params[i]);
    context = ((context | 0xf00000) ^ 0xf00000) | (isAsync << 22);
    const expression = parser.token !== 2162700;
    let body;
    if (expression) {
        body = parseExpression(parser, context, 1, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    else {
        if (context & 64)
            scope = inheritScope(scope, 2);
        body = parseFunctionBody(parser, (context | 0x8001000 | 8192 | 268435456) ^ (0x8001000 | 8192 | 268435456), scope, 2, void 0);
        switch (parser.token) {
            case 67108877:
            case 69271571:
            case 67174409:
            case 22:
                report(parser, 119);
            case 67174411:
                report(parser, 118);
            default:
        }
        if ((parser.token & 8454144) === 8454144 && (parser.flags & 1) === 0)
            report(parser, 28, KeywordDescTable[parser.token & 255]);
        if ((parser.token & 33619968) === 33619968)
            report(parser, 129);
    }
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'ArrowFunctionExpression',
        body,
        params,
        async: isAsync === 1,
        expression
    });
}
function parseFormalParametersOrFormalList(parser, context, scope, inGroup, type) {
    consume(parser, context, 67174411);
    parser.flags &= ~128;
    const params = [];
    let isComplex = 0;
    while (parser.token !== 1073741840) {
        let left;
        const { tokenIndex, linePos, colPos } = parser;
        if (parser.token & 143360) {
            if ((context & 1024) === 0 &&
                ((parser.token & 36864) === 36864 ||
                    (parser.token & 537079808) === 537079808)) {
                isComplex = 1;
            }
            if (context & 64 && (parser.token & 143360) === 143360) {
                declareName(parser, context, scope, parser.tokenValue, type, 0, 0);
            }
            left = parseAndClassifyIdentifier(parser, context, type, tokenIndex, linePos, colPos);
        }
        else {
            if (parser.token === 2162700) {
                left = parseObjectLiteralOrPattern(parser, context, scope, 1, inGroup, type, 0, tokenIndex, linePos, colPos);
            }
            else if (parser.token === 69271571) {
                left = parseArrayExpressionOrPattern(parser, context, scope, 1, inGroup, type, 0, tokenIndex, linePos, colPos);
            }
            else if (parser.token === 14) {
                left = parseSpreadElement(parser, context, scope, 1073741840, type, 0, 0, inGroup, tokenIndex, linePos, colPos);
            }
            else {
                report(parser, 28, KeywordDescTable[parser.token & 255]);
            }
            isComplex = 1;
            reinterpretToPattern(parser, left);
            if (parser.destructible & 16)
                report(parser, 50);
            if (type && parser.destructible & 32)
                report(parser, 50);
        }
        if (parser.token === -2143289315) {
            nextToken(parser, context | 32768);
            isComplex = 1;
            const right = parseExpression(parser, (context | 134217728) ^ 134217728, 1, 1, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
            left = finishNode(parser, context, tokenIndex, linePos, colPos, {
                type: 'AssignmentPattern',
                left,
                right
            });
        }
        params.push(left);
        if (parser.token !== 1073741840)
            consume(parser, context, -1073741806);
    }
    if (isComplex)
        parser.flags |= 128;
    if (context & 64 && (isComplex || context & 1024)) {
        verifyArguments(parser, scope.lexicals);
    }
    consume(parser, context, 1073741840);
    return params;
}
function parseNewExpression(parser, context, inGroup, start, line, column) {
    const id = parseIdentifier(parser, context | 32768, 0, start, line, column);
    const { tokenIndex, linePos, colPos } = parser;
    if (consumeOpt(parser, context, 67108877)) {
        if (context & 67108864 && parser.token === 143494) {
            parser.assignable = 2;
            return parseMetaProperty(parser, context, id, start, line, column);
        }
        report(parser, 95);
    }
    parser.assignable = 2;
    let callee = parsePrimaryExpressionExtended(parser, context, 0, 1, 0, 0, inGroup, tokenIndex, linePos, colPos);
    callee = parseMemberOrUpdateExpression(parser, context, callee, 1, inGroup, tokenIndex, linePos, colPos);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'NewExpression',
        callee,
        arguments: parser.token === 67174411 ? parseArguments(parser, context & ~134217728, inGroup) : []
    });
}
function parseMetaProperty(parser, context, meta, start, line, column) {
    const property = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    return finishNode(parser, context, start, line, column, {
        type: 'MetaProperty',
        meta,
        property
    });
}
function parseAsyncExpression(parser, context, expr, inNewExpression, assignable, inGroup, start, line, column) {
    const { flags } = parser;
    let scope = {};
    if ((flags & 1) === 0) {
        if (parser.token === 86103)
            return parseFunctionExpression(parser, context, 1, inGroup, start, line, column);
        if ((parser.token & 143360) === 143360) {
            if (parser.assignable & 2)
                report(parser, 47);
            if (parser.token === 209005)
                report(parser, 29);
            if (context & 64) {
                scope = inheritScope(initblockScope(), 16);
                declareAndDedupe(parser, context, scope, parser.tokenValue, 1, 0);
            }
            const param = [parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos)];
            return parseArrowFunctionExpression(parser, context, scope, param, 1, start, line, column);
        }
    }
    if (!inNewExpression && parser.token === 67174411) {
        return parseAsyncArrowOrCallExpression(parser, (context | 134217728) ^ 134217728, expr, assignable, flags, start, line, column);
    }
    if (parser.token === 10) {
        if (inNewExpression)
            report(parser, 51);
        if (context & 64) {
            scope = inheritScope(initblockScope(), 16);
            declareAndDedupe(parser, context, scope, parser.tokenValue, 1, 0);
        }
        return parseArrowFunctionExpression(parser, context, scope, [expr], 0, start, line, column);
    }
    parser.assignable = 1;
    return expr;
}
function parseAsyncArrowOrCallExpression(parser, context, callee, assignable, flags, start, line, column) {
    nextToken(parser, context | 32768);
    const scope = context & 64 ? inheritScope(initblockScope(), 16) : {};
    if (consumeOpt(parser, context, 1073741840)) {
        if (parser.token === 10) {
            if (flags & 1)
                report(parser, 46);
            if (!assignable)
                report(parser, 47);
            return parseArrowFunctionExpression(parser, context, scope, [], 1, start, line, column);
        }
        return finishNode(parser, context, start, line, column, {
            type: 'CallExpression',
            callee,
            arguments: []
        });
    }
    let destructible = 0;
    let expr;
    let isComplex = 0;
    parser.destructible &= ~(256 | 128);
    const params = [];
    while (parser.token !== 1073741840) {
        const { token, tokenIndex, linePos, colPos } = parser;
        if (token & (143360 | 4096)) {
            if (context & 64) {
                declareName(parser, context, scope, parser.tokenValue, 1, 0, 0);
            }
            expr = parsePrimaryExpressionExtended(parser, context, 0, 0, 1, 0, 1, tokenIndex, linePos, colPos);
            if ((parser.token & 1073741824) === 1073741824) {
                if (parser.assignable & 2) {
                    destructible |= 16;
                    isComplex = 1;
                }
                else if ((token & 537079808) === 537079808 ||
                    (token & 36864) === 36864) {
                    isComplex = 1;
                }
            }
            else {
                if (parser.token === -2143289315) {
                    isComplex = 1;
                }
                else {
                    destructible |= 16;
                }
                expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 1, tokenIndex, linePos, colPos);
                if ((parser.token & 1073741824) !== 1073741824) {
                    expr = parseAssignmentExpression(parser, context, 1, tokenIndex, linePos, colPos, expr);
                }
            }
        }
        else if (token & 2097152) {
            expr =
                token === 2162700
                    ? parseObjectLiteralOrPattern(parser, context, scope, 0, 1, 0, 0, tokenIndex, linePos, colPos)
                    : parseArrayExpressionOrPattern(parser, context, scope, 0, 1, 0, 0, tokenIndex, linePos, colPos);
            destructible |= parser.destructible;
            isComplex = 1;
            parser.assignable = 2;
            if ((parser.token & 1073741824) !== 1073741824) {
                if (destructible & 8)
                    report(parser, 125);
                expr = parseMemberOrUpdateExpression(parser, context, expr, 0, 0, tokenIndex, linePos, colPos);
                destructible |= 16;
                if ((parser.token & 1073741824) !== 1073741824) {
                    expr = parseAssignmentExpression(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos, expr);
                }
            }
        }
        else if (token === 14) {
            expr = parseSpreadElement(parser, context, scope, 1073741840, 1, 0, 1, 1, tokenIndex, linePos, colPos);
            destructible |= (parser.token === 1073741840 ? 0 : 16) | parser.destructible;
            isComplex = 1;
        }
        else {
            expr = parseExpression(parser, context, 1, 0, 0, tokenIndex, linePos, colPos);
            destructible = parser.assignable;
            params.push(expr);
            while (consumeOpt(parser, context | 32768, -1073741806)) {
                params.push(parseExpression(parser, context, 1, 0, 0, tokenIndex, linePos, colPos));
            }
            destructible |= parser.assignable;
            consume(parser, context, 1073741840);
            parser.destructible = destructible | 16;
            parser.assignable = 2;
            return finishNode(parser, context, start, line, column, {
                type: 'CallExpression',
                callee,
                arguments: params
            });
        }
        params.push(expr);
        if (!consumeOpt(parser, context | 32768, -1073741806))
            break;
    }
    consume(parser, context, 1073741840);
    destructible |=
        parser.destructible & 256
            ? 256
            : 0 | (parser.destructible & 128)
                ? 128
                : 0;
    if (parser.token === 10) {
        if (isComplex)
            parser.flags |= 128;
        if (!assignable)
            report(parser, 48);
        if (destructible & 16)
            report(parser, 25);
        if (destructible & 32)
            report(parser, 49);
        if (parser.flags & 1 || flags & 1)
            report(parser, 46);
        if (destructible & 128)
            report(parser, 29);
        if (context & (1024 | 2097152) && destructible & 256)
            report(parser, 30);
        if (context & 64)
            checkConflictingLexicalDeclarations(parser, context, scope, 0);
        return parseArrowFunctionExpression(parser, context, scope, params, 1, start, line, column);
    }
    else if (destructible & 8) {
        report(parser, 62);
    }
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, {
        type: 'CallExpression',
        callee,
        arguments: params
    });
}
function parseRegExpLiteral(parser, context, start, line, column) {
    const { tokenRaw, tokenRegExp, tokenValue } = parser;
    nextToken(parser, context);
    parser.assignable = 2;
    return context & 512
        ? finishNode(parser, context, start, line, column, {
            type: 'Literal',
            value: tokenValue,
            regex: tokenRegExp,
            raw: tokenRaw
        })
        : finishNode(parser, context, start, line, column, {
            type: 'Literal',
            value: tokenValue,
            regex: tokenRegExp
        });
}
function parseClassDeclaration(parser, context, scope, flags, start, line, column) {
    context = (context | 16777216 | 1024) ^ 16777216;
    let id = null;
    let superClass = null;
    const decorators = context & 1 ? parseDecorators(parser, context) : [];
    nextToken(parser, context);
    const { tokenIndex, linePos, colPos, tokenValue } = parser;
    if (((parser.token & 0x10ff) ^ 0x54) > 0x1000) {
        if (isStrictReservedWord(parser, context, parser.token)) {
            report(parser, 120);
        }
        if ((parser.token & 537079808) === 537079808) {
            report(parser, 121);
        }
        if (context & 64) {
            declareAndDedupe(parser, context, scope, tokenValue, 8, 0);
            if (flags) {
                if (flags & 1) {
                    addBindingToExports(parser, tokenValue);
                }
                else {
                    updateExportsList(parser, tokenValue);
                }
            }
        }
        id = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
    }
    else {
        if (flags & 1) {
            addBindingToExports(parser, '');
        }
        else {
            report(parser, 37, 'Class');
        }
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32768, 20564)) {
        superClass = parseLeftHandSideExpression(parser, context, 0, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        inheritedContext |= 524288;
    }
    else {
        inheritedContext = (inheritedContext | 524288) ^ 524288;
    }
    const body = parseClassBody(parser, inheritedContext, context, scope, 0, 1, 0);
    return finishNode(parser, context, start, line, column, context & 1
        ? {
            type: 'ClassDeclaration',
            id,
            superClass,
            decorators,
            body
        }
        : {
            type: 'ClassDeclaration',
            id,
            superClass,
            body
        });
}
function parseClassExpression(parser, context, inGroup, start, line, column) {
    let id = null;
    let superClass = null;
    context = (context & ~16777216) | 1024;
    const decorators = context & 1 ? parseDecorators(parser, context) : [];
    nextToken(parser, context);
    if (((parser.token & 0x10ff) ^ 0x54) > 0x1000) {
        if (isStrictReservedWord(parser, context, parser.token))
            report(parser, 120);
        if ((parser.token & 537079808) === 537079808)
            report(parser, 121);
        if (context & 64) {
            declareAndDedupe(parser, context, null, parser.tokenValue, 8, 0);
        }
        id = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
    }
    let inheritedContext = context;
    if (consumeOpt(parser, context | 32768, 20564)) {
        superClass = parseLeftHandSideExpression(parser, context, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
        inheritedContext |= 524288;
    }
    else {
        inheritedContext = (inheritedContext | 524288) ^ 524288;
    }
    const body = parseClassBody(parser, inheritedContext, context, null, 0, 0, inGroup);
    parser.assignable = 2;
    return finishNode(parser, context, start, line, column, context & 1
        ? {
            type: 'ClassExpression',
            id,
            superClass,
            decorators,
            body
        }
        : {
            type: 'ClassExpression',
            id,
            superClass,
            body
        });
}
function parseDecorators(parser, context) {
    const list = [];
    while (parser.token === 133) {
        list.push(parseDecoratorList(parser, context, parser.tokenIndex, parser.linePos, parser.colPos));
    }
    return list;
}
function parseDecoratorList(parser, context, start, line, column) {
    nextToken(parser, context | 32768);
    let expression = parsePrimaryExpressionExtended(parser, context, 0, 0, 1, 0, 0, start, line, column);
    expression = parseMemberOrUpdateExpression(parser, context, expression, 0, 0, start, line, column);
    return finishNode(parser, context, start, line, column, {
        type: 'Decorator',
        expression
    });
}
function parseClassBody(parser, context, inheritedContext, scope, type, origin, inGroup) {
    const startt = parser.tokenIndex;
    const linee = parser.linePos;
    const columnn = parser.colPos;
    consume(parser, context | 32768, 2162700);
    parser.flags = (parser.flags | 32) ^ 32;
    const body = [];
    let decorators = [];
    if (context & 1) {
        while (parser.token !== -2146435057) {
            let length = 0;
            decorators = parseDecorators(parser, context);
            length = decorators.length;
            if (length > 0 && parser.tokenValue === 'constructor') {
                report(parser, 112);
            }
            if (parser.token === -2146435057)
                report(parser, 111);
            if (consumeOpt(parser, context, -2146435055)) {
                if (length > 0)
                    report(parser, 122);
                continue;
            }
            body.push(parseClassElementList(parser, context, scope, inheritedContext, type, decorators, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos));
        }
    }
    else {
        while (parser.token !== -2146435057) {
            if (consumeOpt(parser, context, -2146435055)) {
                continue;
            }
            body.push(parseClassElementList(parser, context, scope, inheritedContext, type, decorators, 0, inGroup, parser.tokenIndex, parser.linePos, parser.colPos));
        }
    }
    consume(parser, origin & 1 ? context | 32768 : context, -2146435057);
    return finishNode(parser, context, startt, linee, columnn, {
        type: 'ClassBody',
        body
    });
}
function parseClassElementList(parser, context, scope, inheritedContext, type, decorators, isStatic, inGroup, start, line, column) {
    let kind = isStatic ? 32 : 0;
    let key = null;
    const { token, tokenIndex, linePos, colPos } = parser;
    if (token & (143360 | 36864)) {
        key = parseIdentifier(parser, context, 0, tokenIndex, linePos, colPos);
        switch (token) {
            case 36969:
                if (!isStatic && parser.token !== 67174411) {
                    return parseClassElementList(parser, context, scope, inheritedContext, type, decorators, 1, inGroup, start, line, column);
                }
                break;
            case 143468:
                if (parser.token !== 67174411 && (parser.flags & 1) < 1) {
                    if (context & 1 && (parser.token & -2147483648) === -2147483648) {
                        return parseFieldDefinition(parser, context, key, kind, decorators, tokenIndex, linePos, colPos);
                    }
                    kind |= 16 | (optionalBit(parser, context, 8456755) ? 8 : 0);
                }
                break;
            case 12399:
                if (parser.token !== 67174411) {
                    if (context & 1 && (parser.token & -2147483648) === -2147483648) {
                        return parseFieldDefinition(parser, context, key, kind, decorators, tokenIndex, linePos, colPos);
                    }
                    kind |= 256;
                }
                break;
            case 12400:
                if (parser.token !== 67174411) {
                    if (context & 1 && (parser.token & -2147483648) === -2147483648) {
                        return parseFieldDefinition(parser, context, key, kind, decorators, tokenIndex, linePos, colPos);
                    }
                    kind |= 512;
                }
                break;
            default:
        }
    }
    else if (token === 69271571) {
        kind = 2;
        key = parseComputedPropertyName(parser, inheritedContext, inGroup);
    }
    else if ((token & 134217728) === 134217728) {
        key = parseLiteral(parser, context, tokenIndex, linePos, colPos);
    }
    else if (token === 8456755) {
        kind |= 8;
        nextToken(parser, context);
    }
    else if (context & 1 && parser.token === 131) {
        kind |= 4096;
        key = parsePrivateName(parser, context, tokenIndex, linePos, colPos);
        context = context | 268435456;
    }
    else if (context & 1 && (parser.token & -2147483648) === -2147483648) {
        kind |= 128;
        context = context | 268435456;
    }
    else {
        report(parser, 0);
    }
    if (kind & (8 | 16 | 768)) {
        if (parser.token & 143360) {
            key = parseIdentifier(parser, context, 0, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        else if ((parser.token & 134217728) === 134217728) {
            key = parseLiteral(parser, context, parser.tokenIndex, parser.linePos, parser.colPos);
        }
        else if (parser.token === 69271571) {
            kind |= 2;
            key = parseComputedPropertyName(parser, context, 0);
        }
        else if (context & 1 && parser.token === 131) {
            kind |= 4096;
            key = parsePrivateName(parser, context, tokenIndex, linePos, colPos);
        }
        else
            report(parser, 139);
    }
    if ((kind & 2) < 1) {
        if (parser.tokenValue === 'constructor') {
            if ((parser.token & -2147483648) === -2147483648) {
                report(parser, 133);
            }
            else if ((kind & 32) < 1 && parser.token === 67174411) {
                if (kind & (768 | 16 | 128 | 8)) {
                    report(parser, 53, 'accessor');
                }
                else if ((context & 524288) < 1) {
                    if (parser.flags & 32)
                        report(parser, 54);
                    else
                        parser.flags |= 32;
                }
            }
            kind |= 64;
        }
        else if ((kind & 4096) < 1 &&
            kind & (32 | 768 | 8 | 16) &&
            parser.tokenValue === 'prototype') {
            report(parser, 52);
        }
    }
    if (context & 1 && parser.token !== 67174411) {
        return parseFieldDefinition(parser, context, key, kind, decorators, tokenIndex, linePos, colPos);
    }
    const value = parseMethodDefinition(parser, context, kind, inGroup, parser.tokenIndex, parser.linePos, parser.colPos);
    return finishNode(parser, context, start, line, column, context & 1
        ? {
            type: 'MethodDefinition',
            kind: (kind & 32) < 1 && kind & 64
                ? 'constructor'
                : kind & 256
                    ? 'get'
                    : kind & 512
                        ? 'set'
                        : 'method',
            static: (kind & 32) > 0,
            computed: (kind & 2) > 0,
            key,
            decorators,
            value
        }
        : {
            type: 'MethodDefinition',
            kind: (kind & 32) < 1 && kind & 64
                ? 'constructor'
                : kind & 256
                    ? 'get'
                    : kind & 512
                        ? 'set'
                        : 'method',
            static: (kind & 32) > 0,
            computed: (kind & 2) > 0,
            key,
            value
        });
}
function parsePrivateName(parser, context, start, line, column) {
    nextToken(parser, context);
    const { tokenValue } = parser;
    if (tokenValue === 'constructor')
        report(parser, 132);
    nextToken(parser, context);
    return finishNode(parser, context, start, line, column, {
        type: 'PrivateName',
        name: tokenValue
    });
}
function parseFieldDefinition(parser, context, key, state, decorators, start, line, column) {
    let value = null;
    if (state & 8)
        report(parser, 0);
    if (parser.token === -2143289315) {
        nextToken(parser, context | 32768);
        const idxAfterAssign = parser.tokenIndex;
        const lineAfterAssign = parser.linePos;
        const columnAfterAssign = parser.colPos;
        if (parser.token === 537079925)
            report(parser, 121);
        value = parsePrimaryExpressionExtended(parser, context | 268435456, 0, 0, 1, 0, 0, idxAfterAssign, lineAfterAssign, columnAfterAssign);
        if ((parser.token & -2147483648) !== -2147483648) {
            value = parseMemberOrUpdateExpression(parser, context | 268435456, value, 0, 0, idxAfterAssign, lineAfterAssign, columnAfterAssign);
            if ((parser.token & -2147483648) !== -2147483648) {
                value = parseAssignmentExpression(parser, context | 268435456, 0, idxAfterAssign, lineAfterAssign, columnAfterAssign, value);
            }
        }
    }
    return finishNode(parser, context, start, line, column, {
        type: 'FieldDefinition',
        key,
        value,
        static: (state & 32) > 0,
        computed: (state & 2) > 0,
        decorators
    });
}
function parseBindingPattern(parser, context, scope, dupeChecks, type, origin, start, line, column) {
    if (parser.token & 143360) {
        if (context & 64) {
            const isVarDecl = type & 4 &&
                origin & (8 | 4 | 16);
            declareName(parser, context, scope, parser.tokenValue, type, dupeChecks, isVarDecl);
            if (origin & 16) {
                updateExportsList(parser, parser.tokenValue);
                addBindingToExports(parser, parser.tokenValue);
            }
        }
        return parseAndClassifyIdentifier(parser, context, type, start, line, column);
    }
    if ((parser.token & 2097152) !== 2097152)
        report(parser, 28, KeywordDescTable[parser.token & 255]);
    const left = parser.token === 69271571
        ? parseArrayExpressionOrPattern(parser, context, scope, 1, 0, type, origin, start, line, column)
        : parseObjectLiteralOrPattern(parser, context, scope, 1, 0, type, origin, start, line, column);
    reinterpretToPattern(parser, left);
    if (parser.destructible & 16) {
        report(parser, 50);
    }
    if (type && parser.destructible & 32) {
        report(parser, 50);
    }
    return left;
}
function parseAndClassifyIdentifier(parser, context, type, start, line, column) {
    const { tokenValue, token } = parser;
    if (context & 1024) {
        if ((token & 537079808) === 537079808) {
            report(parser, 121);
        }
        else if ((token & 36864) === 36864) {
            report(parser, 100);
        }
        else if (token === 143479) {
            report(parser, 96);
        }
    }
    if ((token & 20480) === 20480) {
        report(parser, 105);
    }
    if (context & (2048 | 2097152) && token === 241770) {
        report(parser, 30);
    }
    if (token === 268677192) {
        if (type & (8 | 16))
            report(parser, 103);
    }
    if (context & (4194304 | 2048) && token === 209005) {
        report(parser, 101);
    }
    if (token === 143478) {
        report(parser, 96);
    }
    nextToken(parser, context);
    return finishNode(parser, context, start, line, column, {
        type: 'Identifier',
        name: tokenValue
    });
}

function parseScript(source, options) {
    return parseSource(source, options, 0);
}
function parseModule(source, options) {
    return parseSource(source, options, 1024 | 2048);
}
function parse(source, options) {
    return parseSource(source, options, 0);
}
const version = '1.2.1';

export { parse, parseModule, parseScript, version };
