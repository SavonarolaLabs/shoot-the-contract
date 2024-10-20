// Generated from RalphParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RalphParserListener from './RalphParserListener.js';
import RalphParserVisitor from './RalphParserVisitor.js';

const serializedATN = [4,1,100,531,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,1,0,1,0,1,0,1,0,1,0,5,0,106,8,0,10,0,12,0,109,9,0,1,0,1,0,1,1,1,
1,1,1,5,1,116,8,1,10,1,12,1,119,9,1,1,2,1,2,1,2,3,2,124,8,2,3,2,126,8,2,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,135,8,3,3,3,137,8,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,4,1,4,3,4,147,8,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
3,6,161,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,175,8,6,
10,6,12,6,178,9,6,1,7,1,7,3,7,182,8,7,5,7,184,8,7,10,7,12,7,187,9,7,1,8,
1,8,3,8,191,8,8,1,8,1,8,5,8,195,8,8,10,8,12,8,198,9,8,1,9,1,9,3,9,202,8,
9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,213,8,10,10,10,12,10,216,
9,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,226,8,12,10,12,12,12,229,
9,12,1,12,1,12,1,13,1,13,3,13,235,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
3,14,244,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,3,16,253,8,16,1,16,1,16,
1,16,1,16,5,16,259,8,16,10,16,12,16,262,9,16,1,16,1,16,1,17,1,17,3,17,268,
8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,277,8,18,10,18,12,18,280,9,
18,1,18,3,18,283,8,18,3,18,285,8,18,1,18,3,18,288,8,18,1,19,3,19,291,8,19,
1,19,3,19,294,8,19,1,19,1,19,1,19,1,19,1,20,1,20,3,20,302,8,20,5,20,304,
8,20,10,20,12,20,307,9,20,1,21,3,21,310,8,21,1,21,3,21,313,8,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,322,8,21,1,21,3,21,325,8,21,1,22,1,22,1,22,
1,22,1,22,1,22,3,22,333,8,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,26,
1,26,1,26,1,26,5,26,347,8,26,10,26,12,26,350,9,26,1,26,1,26,1,27,1,27,1,
27,1,27,1,27,5,27,359,8,27,10,27,12,27,362,9,27,1,27,1,27,1,28,1,28,5,28,
368,8,28,10,28,12,28,371,9,28,1,29,1,29,1,29,1,29,1,29,1,29,3,29,379,8,29,
1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,389,8,30,1,30,1,30,1,31,3,31,
394,8,31,1,31,3,31,397,8,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,405,8,31,
1,31,3,31,408,8,31,1,31,3,31,411,8,31,1,31,1,31,1,32,1,32,1,32,1,32,5,32,
419,8,32,10,32,12,32,422,9,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,
35,1,35,1,35,1,35,1,35,1,36,3,36,438,8,36,1,36,1,36,1,36,1,36,3,36,444,8,
36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
1,39,1,39,1,39,1,39,1,39,1,40,1,40,5,40,467,8,40,10,40,12,40,470,9,40,1,
40,1,40,3,40,474,8,40,1,41,1,41,1,41,1,41,3,41,480,8,41,1,42,1,42,1,42,1,
42,1,42,3,42,487,8,42,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,
1,45,3,45,500,8,45,1,46,1,46,1,46,3,46,505,8,46,1,47,1,47,1,47,3,47,510,
8,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
48,1,48,1,48,1,48,1,49,1,49,1,49,0,1,12,50,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,82,84,86,88,90,92,94,96,98,0,6,2,0,51,51,73,73,1,0,49,64,
1,0,65,70,1,0,71,72,2,0,79,83,87,88,1,0,94,95,561,0,100,1,0,0,0,2,112,1,
0,0,0,4,125,1,0,0,0,6,136,1,0,0,0,8,146,1,0,0,0,10,148,1,0,0,0,12,160,1,
0,0,0,14,185,1,0,0,0,16,190,1,0,0,0,18,199,1,0,0,0,20,207,1,0,0,0,22,217,
1,0,0,0,24,221,1,0,0,0,26,234,1,0,0,0,28,243,1,0,0,0,30,245,1,0,0,0,32,252,
1,0,0,0,34,267,1,0,0,0,36,287,1,0,0,0,38,290,1,0,0,0,40,305,1,0,0,0,42,309,
1,0,0,0,44,332,1,0,0,0,46,334,1,0,0,0,48,336,1,0,0,0,50,338,1,0,0,0,52,342,
1,0,0,0,54,353,1,0,0,0,56,369,1,0,0,0,58,372,1,0,0,0,60,382,1,0,0,0,62,393,
1,0,0,0,64,414,1,0,0,0,66,423,1,0,0,0,68,428,1,0,0,0,70,431,1,0,0,0,72,437,
1,0,0,0,74,447,1,0,0,0,76,453,1,0,0,0,78,459,1,0,0,0,80,473,1,0,0,0,82,479,
1,0,0,0,84,486,1,0,0,0,86,488,1,0,0,0,88,490,1,0,0,0,90,493,1,0,0,0,92,501,
1,0,0,0,94,506,1,0,0,0,96,514,1,0,0,0,98,528,1,0,0,0,100,107,3,56,28,0,101,
106,3,58,29,0,102,106,3,62,31,0,103,106,3,72,36,0,104,106,3,60,30,0,105,
101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,109,1,0,
0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,110,
111,5,0,0,1,111,1,1,0,0,0,112,117,3,10,5,0,113,114,5,44,0,0,114,116,3,10,
5,0,115,113,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,
3,1,0,0,0,119,117,1,0,0,0,120,126,5,15,0,0,121,123,5,14,0,0,122,124,5,16,
0,0,123,122,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,120,1,0,0,0,125,
121,1,0,0,0,126,127,1,0,0,0,127,128,3,10,5,0,128,129,5,43,0,0,129,130,3,
12,6,0,130,5,1,0,0,0,131,137,5,15,0,0,132,134,5,14,0,0,133,135,5,16,0,0,
134,133,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,131,1,0,0,0,136,132,
1,0,0,0,137,138,1,0,0,0,138,139,5,37,0,0,139,140,3,2,1,0,140,141,5,38,0,
0,141,142,5,43,0,0,142,143,3,12,6,0,143,7,1,0,0,0,144,147,3,4,2,0,145,147,
3,6,3,0,146,144,1,0,0,0,146,145,1,0,0,0,147,9,1,0,0,0,148,149,5,35,0,0,149,
11,1,0,0,0,150,151,6,6,-1,0,151,161,3,26,13,0,152,161,3,16,8,0,153,161,3,
90,45,0,154,155,5,37,0,0,155,156,3,12,6,0,156,157,5,38,0,0,157,161,1,0,0,
0,158,159,7,0,0,0,159,161,3,12,6,5,160,150,1,0,0,0,160,152,1,0,0,0,160,153,
1,0,0,0,160,154,1,0,0,0,160,158,1,0,0,0,161,176,1,0,0,0,162,163,10,4,0,0,
163,164,7,1,0,0,164,175,3,12,6,5,165,166,10,3,0,0,166,167,7,2,0,0,167,175,
3,12,6,4,168,169,10,2,0,0,169,170,7,3,0,0,170,175,3,12,6,3,171,172,10,1,
0,0,172,173,5,43,0,0,173,175,3,12,6,2,174,162,1,0,0,0,174,165,1,0,0,0,174,
168,1,0,0,0,174,171,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,
0,0,177,13,1,0,0,0,178,176,1,0,0,0,179,181,3,12,6,0,180,182,5,44,0,0,181,
180,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,179,1,0,0,0,184,187,1,0,
0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,15,1,0,0,0,187,185,1,0,0,0,188,191,
3,10,5,0,189,191,3,18,9,0,190,188,1,0,0,0,190,189,1,0,0,0,191,196,1,0,0,
0,192,193,5,47,0,0,193,195,3,16,8,0,194,192,1,0,0,0,195,198,1,0,0,0,196,
194,1,0,0,0,196,197,1,0,0,0,197,17,1,0,0,0,198,196,1,0,0,0,199,201,5,35,
0,0,200,202,3,24,12,0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,
204,5,37,0,0,204,205,3,14,7,0,205,206,5,38,0,0,206,19,1,0,0,0,207,208,3,
12,6,0,208,209,5,34,0,0,209,214,3,22,11,0,210,211,5,44,0,0,211,213,3,22,
11,0,212,210,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,
21,1,0,0,0,216,214,1,0,0,0,217,218,3,12,6,0,218,219,5,46,0,0,219,220,3,12,
6,0,220,23,1,0,0,0,221,222,5,39,0,0,222,227,3,20,10,0,223,224,5,45,0,0,224,
226,3,20,10,0,225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,
0,0,0,228,230,1,0,0,0,229,227,1,0,0,0,230,231,5,40,0,0,231,25,1,0,0,0,232,
235,3,44,22,0,233,235,3,32,16,0,234,232,1,0,0,0,234,233,1,0,0,0,235,27,1,
0,0,0,236,244,5,25,0,0,237,244,5,26,0,0,238,244,5,28,0,0,239,244,5,27,0,
0,240,244,5,29,0,0,241,244,5,30,0,0,242,244,3,30,15,0,243,236,1,0,0,0,243,
237,1,0,0,0,243,238,1,0,0,0,243,239,1,0,0,0,243,240,1,0,0,0,243,241,1,0,
0,0,243,242,1,0,0,0,244,29,1,0,0,0,245,246,5,41,0,0,246,247,3,34,17,0,247,
248,5,45,0,0,248,249,3,12,6,0,249,250,5,42,0,0,250,31,1,0,0,0,251,253,5,
35,0,0,252,251,1,0,0,0,252,253,1,0,0,0,253,254,1,0,0,0,254,255,5,41,0,0,
255,260,3,12,6,0,256,257,5,44,0,0,257,259,3,12,6,0,258,256,1,0,0,0,259,262,
1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,263,1,0,0,0,262,260,1,0,0,0,
263,264,5,42,0,0,264,33,1,0,0,0,265,268,3,28,14,0,266,268,5,35,0,0,267,265,
1,0,0,0,267,266,1,0,0,0,268,35,1,0,0,0,269,270,5,37,0,0,270,288,5,38,0,0,
271,288,3,34,17,0,272,284,5,37,0,0,273,278,3,34,17,0,274,275,5,44,0,0,275,
277,3,34,17,0,276,274,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,
0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,281,283,5,44,0,0,282,281,1,0,0,0,282,
283,1,0,0,0,283,285,1,0,0,0,284,273,1,0,0,0,284,285,1,0,0,0,285,286,1,0,
0,0,286,288,5,38,0,0,287,269,1,0,0,0,287,271,1,0,0,0,287,272,1,0,0,0,288,
37,1,0,0,0,289,291,5,32,0,0,290,289,1,0,0,0,290,291,1,0,0,0,291,293,1,0,
0,0,292,294,5,16,0,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,
296,5,35,0,0,296,297,5,46,0,0,297,298,3,34,17,0,298,39,1,0,0,0,299,301,3,
38,19,0,300,302,5,44,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,
303,299,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,41,1,
0,0,0,307,305,1,0,0,0,308,310,3,78,39,0,309,308,1,0,0,0,309,310,1,0,0,0,
310,312,1,0,0,0,311,313,5,2,0,0,312,311,1,0,0,0,312,313,1,0,0,0,313,314,
1,0,0,0,314,315,5,1,0,0,315,316,5,35,0,0,316,317,5,37,0,0,317,318,3,40,20,
0,318,321,5,38,0,0,319,320,5,34,0,0,320,322,3,36,18,0,321,319,1,0,0,0,321,
322,1,0,0,0,322,324,1,0,0,0,323,325,3,80,40,0,324,323,1,0,0,0,324,325,1,
0,0,0,325,43,1,0,0,0,326,333,3,46,23,0,327,333,3,48,24,0,328,333,5,76,0,
0,329,333,5,77,0,0,330,333,5,78,0,0,331,333,5,75,0,0,332,326,1,0,0,0,332,
327,1,0,0,0,332,328,1,0,0,0,332,329,1,0,0,0,332,330,1,0,0,0,332,331,1,0,
0,0,333,45,1,0,0,0,334,335,7,4,0,0,335,47,1,0,0,0,336,337,7,5,0,0,337,49,
1,0,0,0,338,339,3,10,5,0,339,340,5,43,0,0,340,341,3,44,22,0,341,51,1,0,0,
0,342,343,5,6,0,0,343,344,5,35,0,0,344,348,5,39,0,0,345,347,3,50,25,0,346,
345,1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,0,348,349,1,0,0,0,349,351,1,0,
0,0,350,348,1,0,0,0,351,352,5,40,0,0,352,53,1,0,0,0,353,360,5,39,0,0,354,
359,3,82,41,0,355,359,3,74,37,0,356,359,3,42,21,0,357,359,3,52,26,0,358,
354,1,0,0,0,358,355,1,0,0,0,358,356,1,0,0,0,358,357,1,0,0,0,359,362,1,0,
0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,363,1,0,0,0,362,360,1,0,0,0,363,
364,5,40,0,0,364,55,1,0,0,0,365,366,5,4,0,0,366,368,5,36,0,0,367,365,1,0,
0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,57,1,0,0,0,371,369,
1,0,0,0,372,373,5,7,0,0,373,378,5,35,0,0,374,375,5,37,0,0,375,376,3,40,20,
0,376,377,5,38,0,0,377,379,1,0,0,0,378,374,1,0,0,0,378,379,1,0,0,0,379,380,
1,0,0,0,380,381,3,54,27,0,381,59,1,0,0,0,382,383,5,9,0,0,383,388,5,35,0,
0,384,385,5,37,0,0,385,386,3,40,20,0,386,387,5,38,0,0,387,389,1,0,0,0,388,
384,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,391,3,54,27,0,391,61,1,0,
0,0,392,394,3,70,35,0,393,392,1,0,0,0,393,394,1,0,0,0,394,396,1,0,0,0,395,
397,5,18,0,0,396,395,1,0,0,0,396,397,1,0,0,0,397,398,1,0,0,0,398,399,5,8,
0,0,399,404,5,35,0,0,400,401,5,37,0,0,401,402,3,40,20,0,402,403,5,38,0,0,
403,405,1,0,0,0,404,400,1,0,0,0,404,405,1,0,0,0,405,407,1,0,0,0,406,408,
3,64,32,0,407,406,1,0,0,0,407,408,1,0,0,0,408,410,1,0,0,0,409,411,3,68,34,
0,410,409,1,0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,413,3,54,27,0,413,
63,1,0,0,0,414,415,5,17,0,0,415,420,3,66,33,0,416,417,5,44,0,0,417,419,3,
66,33,0,418,416,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,0,
421,65,1,0,0,0,422,420,1,0,0,0,423,424,5,35,0,0,424,425,5,37,0,0,425,426,
3,14,7,0,426,427,5,38,0,0,427,67,1,0,0,0,428,429,5,19,0,0,429,430,5,35,0,
0,430,69,1,0,0,0,431,432,5,31,0,0,432,433,5,37,0,0,433,434,3,14,7,0,434,
435,5,38,0,0,435,71,1,0,0,0,436,438,3,70,35,0,437,436,1,0,0,0,437,438,1,
0,0,0,438,439,1,0,0,0,439,440,5,5,0,0,440,443,5,35,0,0,441,442,5,17,0,0,
442,444,5,35,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,446,
3,54,27,0,446,73,1,0,0,0,447,448,5,20,0,0,448,449,5,35,0,0,449,450,5,37,
0,0,450,451,3,40,20,0,451,452,5,38,0,0,452,75,1,0,0,0,453,454,5,21,0,0,454,
455,5,35,0,0,455,456,5,37,0,0,456,457,3,14,7,0,457,458,5,38,0,0,458,77,1,
0,0,0,459,460,5,22,0,0,460,461,5,37,0,0,461,462,3,14,7,0,462,463,5,38,0,
0,463,79,1,0,0,0,464,468,5,39,0,0,465,467,3,82,41,0,466,465,1,0,0,0,467,
470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,471,1,0,0,0,470,468,1,0,
0,0,471,474,5,40,0,0,472,474,3,82,41,0,473,464,1,0,0,0,473,472,1,0,0,0,474,
81,1,0,0,0,475,480,3,84,42,0,476,480,3,90,45,0,477,480,3,94,47,0,478,480,
3,96,48,0,479,475,1,0,0,0,479,476,1,0,0,0,479,477,1,0,0,0,479,478,1,0,0,
0,480,83,1,0,0,0,481,487,3,86,43,0,482,487,3,88,44,0,483,487,3,8,4,0,484,
487,3,12,6,0,485,487,3,76,38,0,486,481,1,0,0,0,486,482,1,0,0,0,486,483,1,
0,0,0,486,484,1,0,0,0,486,485,1,0,0,0,487,85,1,0,0,0,488,489,3,98,49,0,489,
87,1,0,0,0,490,491,5,3,0,0,491,492,3,14,7,0,492,89,1,0,0,0,493,494,5,10,
0,0,494,495,5,37,0,0,495,496,3,12,6,0,496,497,5,38,0,0,497,499,3,80,40,0,
498,500,3,92,46,0,499,498,1,0,0,0,499,500,1,0,0,0,500,91,1,0,0,0,501,504,
5,11,0,0,502,505,3,80,40,0,503,505,3,90,45,0,504,502,1,0,0,0,504,503,1,0,
0,0,505,93,1,0,0,0,506,507,5,12,0,0,507,509,5,37,0,0,508,510,3,12,6,0,509,
508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,512,5,38,0,0,512,513,3,80,
40,0,513,95,1,0,0,0,514,515,5,13,0,0,515,516,5,37,0,0,516,517,5,14,0,0,517,
518,5,16,0,0,518,519,3,10,5,0,519,520,5,43,0,0,520,521,3,12,6,0,521,522,
5,45,0,0,522,523,3,12,6,0,523,524,5,45,0,0,524,525,3,12,6,0,525,526,5,38,
0,0,526,527,3,80,40,0,527,97,1,0,0,0,528,529,5,100,0,0,529,99,1,0,0,0,57,
105,107,117,123,125,134,136,146,160,174,176,181,185,190,196,201,214,227,
234,243,252,260,267,278,282,284,287,290,293,301,305,309,312,321,324,332,
348,358,360,369,378,388,393,396,404,407,410,420,437,443,468,473,479,486,
499,504,509];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RalphParser extends antlr4.Parser {

    static grammarFileName = "RalphParser.g4";
    static literalNames = [ null, "'fn'", "'pub'", "'return'", "'import'", 
                            "'Interface'", "'enum'", "'TxScript'", "'Contract'", 
                            "'AssetScript'", "'if'", "'else'", "'while'", 
                            "'for'", "'let'", "'const'", "'mut'", "'extends'", 
                            "'Abstract'", "'implements'", "'event'", "'emit'", 
                            "'@using'", "'using'", "'@'", "'Bool'", "'I256'", 
                            "'U256'", "'Byte'", "'ByteVec'", "'Address'", 
                            "'@std'", "'@unused'", "'unused'", "'->'", null, 
                            null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
                            "'='", "','", "';'", "':'", "'.'", "'?'", "'++'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'|**|'", 
                            null, null, null, "'<<'", "'>>'", "'&'", "'^'", 
                            "'|'", "'=='", "'!='", "'<'", "'<='", "'>'", 
                            "'>='", "'&&'", "'||'", "'!'", "'alph'", "'ALPH'" ];
    static symbolicNames = [ null, "FN", "PUB", "RETURN", "IMPORT", "INTERFACE", 
                             "ENUM", "TXSCRIPT", "CONTRACT", "ASSETSCRIPT", 
                             "IF", "ELSE", "WHILE", "FOR", "LET", "CONST", 
                             "MUT", "EXTENDS", "ABSTRACT", "IMPLEMENTS", 
                             "EVENT", "EMIT", "ATUSING", "USING", "AT", 
                             "BOOL", "I256", "U256", "BYTE", "BYTEVEC", 
                             "ADDRESS", "STDANNOTATION", "ATUNUSED", "UNUSED", 
                             "R_ARROW", "IDENTIFIER", "IMPORT_PATH", "L_PAREN", 
                             "R_PAREN", "L_CURLY", "R_CURLY", "L_BRACKET", 
                             "R_BRACKET", "ASSIGN", "COMMA", "SEMI", "COLON", 
                             "DOT", "DOUBT", "CONCAT", "ADD", "SUB", "MUL", 
                             "DIV", "MOD", "EXP", "MODEXP", "MODADD", "MODSUB", 
                             "MODMUL", "SHL", "SHR", "BITAND", "XOR", "BITOR", 
                             "EQ", "NQ", "LT", "LE", "GT", "GE", "AND", 
                             "OR", "NOT", "ALPH", "ALPH_TOKEN", "ADDRESS_LIT", 
                             "ALPH_LIT", "BOOL_LIT", "BYTEVEC_LIT", "DECIMAL_LIT", 
                             "BINARY_LIT", "OCTAL_LIT", "HEX_LIT", "FLOAT_LIT", 
                             "DECIMAL_FLOAT_LIT", "HEX_FLOAT_LIT", "IMAGINARY_LIT", 
                             "RUNE_LIT", "BYTE_VALUE", "OCTAL_BYTE_VALUE", 
                             "HEX_BYTE_VALUE", "LITTLE_U_VALUE", "BIG_U_VALUE", 
                             "RAW_STRING_LIT", "INTERPRETED_STRING_LIT", 
                             "WS", "COMMENT", "LINE_COMMENT", "TERMINATOR", 
                             "EOS" ];
    static ruleNames = [ "sourceFile", "identifierList", "varDeclSingle", 
                         "varDeclMulti", "varDecl", "varName", "expression", 
                         "expressionList", "callChain", "methodCall", "apsPerAddress", 
                         "apsTokenPart", "aps", "primaryExpr", "primitiveType", 
                         "arrayType", "arrayExpr", "typeName", "result", 
                         "param", "paramList", "methodDecl", "basicLit", 
                         "integer", "string_", "varNameAssign", "enum", 
                         "typeStructBody", "imports", "txScript", "assetScript", 
                         "contract", "extends", "contractExtends", "implements", 
                         "stdAnnotation", "interface", "event", "emit", 
                         "annotation", "block", "statement", "simpleStmt", 
                         "emptyStmt", "returnStmt", "ifStmt", "elseStmt", 
                         "whileStmt", "forStmt", "eos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RalphParser.ruleNames;
        this.literalNames = RalphParser.literalNames;
        this.symbolicNames = RalphParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	sourceFile() {
	    let localctx = new SourceFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RalphParser.RULE_sourceFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.imports();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147746720) !== 0)) {
	            this.state = 105;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 101;
	                this.txScript();
	                break;

	            case 2:
	                this.state = 102;
	                this.contract();
	                break;

	            case 3:
	                this.state = 103;
	                this.interface_();
	                break;

	            case 4:
	                this.state = 104;
	                this.assetScript();
	                break;

	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 110;
	        this.match(RalphParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierList() {
	    let localctx = new IdentifierListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RalphParser.RULE_identifierList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.varName();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===44) {
	            this.state = 113;
	            this.match(RalphParser.COMMA);
	            this.state = 114;
	            this.varName();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclSingle() {
	    let localctx = new VarDeclSingleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RalphParser.RULE_varDeclSingle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.state = 120;
	            this.match(RalphParser.CONST);
	            break;
	        case 14:
	            this.state = 121;
	            this.match(RalphParser.LET);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 122;
	                this.match(RalphParser.MUT);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 127;
	        this.varName();
	        this.state = 128;
	        this.match(RalphParser.ASSIGN);
	        this.state = 129;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclMulti() {
	    let localctx = new VarDeclMultiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RalphParser.RULE_varDeclMulti);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.state = 131;
	            this.match(RalphParser.CONST);
	            break;
	        case 14:
	            this.state = 132;
	            this.match(RalphParser.LET);
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 133;
	                this.match(RalphParser.MUT);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 138;
	        this.match(RalphParser.L_PAREN);
	        this.state = 139;
	        this.identifierList();
	        this.state = 140;
	        this.match(RalphParser.R_PAREN);
	        this.state = 141;
	        this.match(RalphParser.ASSIGN);
	        this.state = 142;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDecl() {
	    let localctx = new VarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RalphParser.RULE_varDecl);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.varDeclSingle();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            this.varDeclMulti();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varName() {
	    let localctx = new VarNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RalphParser.RULE_varName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(RalphParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, RalphParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 151;
	            this.primaryExpr();
	            break;

	        case 2:
	            this.state = 152;
	            this.callChain();
	            break;

	        case 3:
	            this.state = 153;
	            this.ifStmt();
	            break;

	        case 4:
	            this.state = 154;
	            this.match(RalphParser.L_PAREN);
	            this.state = 155;
	            this.expression(0);
	            this.state = 156;
	            this.match(RalphParser.R_PAREN);
	            break;

	        case 5:
	            this.state = 158;
	            _la = this._input.LA(1);
	            if(!(_la===51 || _la===73)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 159;
	            this.expression(5);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 174;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RalphParser.RULE_expression);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 163;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 65535) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 164;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RalphParser.RULE_expression);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 166;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 167;
	                    this.expression(4);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RalphParser.RULE_expression);
	                    this.state = 168;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 169;
	                    _la = this._input.LA(1);
	                    if(!(_la===71 || _la===72)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 170;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, RalphParser.RULE_expression);
	                    this.state = 171;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 172;
	                    this.match(RalphParser.ASSIGN);
	                    this.state = 173;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RalphParser.RULE_expressionList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 179;
	                this.expression(0);
	                this.state = 181;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                if(la_===1) {
	                    this.state = 180;
	                    this.match(RalphParser.COMMA);

	                } 
	            }
	            this.state = 187;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callChain() {
	    let localctx = new CallChainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RalphParser.RULE_callChain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 188;
	            this.varName();
	            break;

	        case 2:
	            this.state = 189;
	            this.methodCall();
	            break;

	        }
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 192;
	                this.match(RalphParser.DOT);
	                this.state = 193;
	                this.callChain(); 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodCall() {
	    let localctx = new MethodCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RalphParser.RULE_methodCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 200;
	            this.aps();
	        }

	        this.state = 203;
	        this.match(RalphParser.L_PAREN);
	        this.state = 204;
	        this.expressionList();
	        this.state = 205;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	apsPerAddress() {
	    let localctx = new ApsPerAddressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RalphParser.RULE_apsPerAddress);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.expression(0);
	        this.state = 208;
	        this.match(RalphParser.R_ARROW);
	        this.state = 209;
	        this.apsTokenPart();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===44) {
	            this.state = 210;
	            this.match(RalphParser.COMMA);
	            this.state = 211;
	            this.apsTokenPart();
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	apsTokenPart() {
	    let localctx = new ApsTokenPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RalphParser.RULE_apsTokenPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.expression(0);
	        this.state = 218;
	        this.match(RalphParser.COLON);
	        this.state = 219;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aps() {
	    let localctx = new ApsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RalphParser.RULE_aps);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(RalphParser.L_CURLY);
	        this.state = 222;
	        this.apsPerAddress();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 223;
	            this.match(RalphParser.SEMI);
	            this.state = 224;
	            this.apsPerAddress();
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 230;
	        this.match(RalphParser.R_CURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpr() {
	    let localctx = new PrimaryExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RalphParser.RULE_primaryExpr);
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 87:
	        case 88:
	        case 94:
	        case 95:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.basicLit();
	            break;
	        case 35:
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.arrayExpr();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primitiveType() {
	    let localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RalphParser.RULE_primitiveType);
	    try {
	        this.state = 243;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.match(RalphParser.BOOL);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(RalphParser.I256);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 238;
	            this.match(RalphParser.BYTE);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 239;
	            this.match(RalphParser.U256);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 240;
	            this.match(RalphParser.BYTEVEC);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 241;
	            this.match(RalphParser.ADDRESS);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 242;
	            this.arrayType();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayType() {
	    let localctx = new ArrayTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RalphParser.RULE_arrayType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(RalphParser.L_BRACKET);
	        this.state = 246;
	        this.typeName();
	        this.state = 247;
	        this.match(RalphParser.SEMI);
	        this.state = 248;
	        this.expression(0);
	        this.state = 249;
	        this.match(RalphParser.R_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayExpr() {
	    let localctx = new ArrayExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, RalphParser.RULE_arrayExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 251;
	            this.match(RalphParser.IDENTIFIER);
	        }

	        this.state = 254;
	        this.match(RalphParser.L_BRACKET);
	        this.state = 255;
	        this.expression(0);
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===44) {
	            this.state = 256;
	            this.match(RalphParser.COMMA);
	            this.state = 257;
	            this.expression(0);
	            this.state = 262;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 263;
	        this.match(RalphParser.R_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeName() {
	    let localctx = new TypeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, RalphParser.RULE_typeName);
	    try {
	        this.state = 267;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.primitiveType();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(RalphParser.IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	result() {
	    let localctx = new ResultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, RalphParser.RULE_result);
	    var _la = 0;
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 269;
	            this.match(RalphParser.L_PAREN);
	            this.state = 270;
	            this.match(RalphParser.R_PAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 271;
	            this.typeName();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.match(RalphParser.L_PAREN);
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 66623) !== 0)) {
	                this.state = 273;
	                this.typeName();
	                this.state = 278;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 274;
	                        this.match(RalphParser.COMMA);
	                        this.state = 275;
	                        this.typeName(); 
	                    }
	                    this.state = 280;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	                }

	                this.state = 282;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 281;
	                    this.match(RalphParser.COMMA);
	                }

	            }

	            this.state = 286;
	            this.match(RalphParser.R_PAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, RalphParser.RULE_param);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 289;
	            this.match(RalphParser.ATUNUSED);
	        }

	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 292;
	            this.match(RalphParser.MUT);
	        }

	        this.state = 295;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 296;
	        this.match(RalphParser.COLON);
	        this.state = 297;
	        this.typeName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, RalphParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 589825) !== 0)) {
	            this.state = 299;
	            this.param();
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 300;
	                this.match(RalphParser.COMMA);
	            }

	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodDecl() {
	    let localctx = new MethodDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, RalphParser.RULE_methodDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 308;
	            this.annotation();
	        }

	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 311;
	            this.match(RalphParser.PUB);
	        }

	        this.state = 314;
	        this.match(RalphParser.FN);
	        this.state = 315;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 316;
	        this.match(RalphParser.L_PAREN);
	        this.state = 317;
	        this.paramList();
	        this.state = 318;
	        this.match(RalphParser.R_PAREN);
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 319;
	            this.match(RalphParser.R_ARROW);
	            this.state = 320;
	            this.result();
	        }

	        this.state = 324;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 323;
	            this.block();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	basicLit() {
	    let localctx = new BasicLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, RalphParser.RULE_basicLit);
	    try {
	        this.state = 332;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 87:
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            this.integer();
	            break;
	        case 94:
	        case 95:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.string_();
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 328;
	            this.match(RalphParser.ADDRESS_LIT);
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 329;
	            this.match(RalphParser.ALPH_LIT);
	            break;
	        case 78:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 330;
	            this.match(RalphParser.BOOL_LIT);
	            break;
	        case 75:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 331;
	            this.match(RalphParser.ALPH_TOKEN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, RalphParser.RULE_integer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        _la = this._input.LA(1);
	        if(!(((((_la - 79)) & ~0x1f) === 0 && ((1 << (_la - 79)) & 799) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, RalphParser.RULE_string_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!(_la===94 || _la===95)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varNameAssign() {
	    let localctx = new VarNameAssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, RalphParser.RULE_varNameAssign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.varName();
	        this.state = 339;
	        this.match(RalphParser.ASSIGN);
	        this.state = 340;
	        this.basicLit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enum_() {
	    let localctx = new EnumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, RalphParser.RULE_enum);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(RalphParser.ENUM);
	        this.state = 343;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 344;
	        this.match(RalphParser.L_CURLY);
	        this.state = 348;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 345;
	            this.varNameAssign();
	            this.state = 350;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 351;
	        this.match(RalphParser.R_CURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeStructBody() {
	    let localctx = new TypeStructBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, RalphParser.RULE_typeStructBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(RalphParser.L_CURLY);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7402574) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 65605) !== 0) || ((((_la - 73)) & ~0x1f) === 0 && ((1 << (_la - 73)) & 140560381) !== 0)) {
	            this.state = 358;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 3:
	            case 10:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 21:
	            case 35:
	            case 37:
	            case 41:
	            case 51:
	            case 73:
	            case 75:
	            case 76:
	            case 77:
	            case 78:
	            case 79:
	            case 80:
	            case 81:
	            case 82:
	            case 83:
	            case 87:
	            case 88:
	            case 94:
	            case 95:
	            case 100:
	                this.state = 354;
	                this.statement();
	                break;
	            case 20:
	                this.state = 355;
	                this.event();
	                break;
	            case 1:
	            case 2:
	            case 22:
	                this.state = 356;
	                this.methodDecl();
	                break;
	            case 6:
	                this.state = 357;
	                this.enum_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 362;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 363;
	        this.match(RalphParser.R_CURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imports() {
	    let localctx = new ImportsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, RalphParser.RULE_imports);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 365;
	            this.match(RalphParser.IMPORT);
	            this.state = 366;
	            this.match(RalphParser.IMPORT_PATH);
	            this.state = 371;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	txScript() {
	    let localctx = new TxScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, RalphParser.RULE_txScript);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(RalphParser.TXSCRIPT);
	        this.state = 373;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 378;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 374;
	            this.match(RalphParser.L_PAREN);
	            this.state = 375;
	            this.paramList();
	            this.state = 376;
	            this.match(RalphParser.R_PAREN);
	        }

	        this.state = 380;
	        this.typeStructBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assetScript() {
	    let localctx = new AssetScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, RalphParser.RULE_assetScript);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(RalphParser.ASSETSCRIPT);
	        this.state = 383;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 384;
	            this.match(RalphParser.L_PAREN);
	            this.state = 385;
	            this.paramList();
	            this.state = 386;
	            this.match(RalphParser.R_PAREN);
	        }

	        this.state = 390;
	        this.typeStructBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contract() {
	    let localctx = new ContractContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, RalphParser.RULE_contract);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 392;
	            this.stdAnnotation();
	        }

	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 395;
	            this.match(RalphParser.ABSTRACT);
	        }

	        this.state = 398;
	        this.match(RalphParser.CONTRACT);
	        this.state = 399;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 400;
	            this.match(RalphParser.L_PAREN);
	            this.state = 401;
	            this.paramList();
	            this.state = 402;
	            this.match(RalphParser.R_PAREN);
	        }

	        this.state = 407;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 406;
	            this.extends_();
	        }

	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 409;
	            this.implements_();
	        }

	        this.state = 412;
	        this.typeStructBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	extends_() {
	    let localctx = new ExtendsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, RalphParser.RULE_extends);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(RalphParser.EXTENDS);
	        this.state = 415;
	        this.contractExtends();
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===44) {
	            this.state = 416;
	            this.match(RalphParser.COMMA);
	            this.state = 417;
	            this.contractExtends();
	            this.state = 422;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contractExtends() {
	    let localctx = new ContractExtendsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, RalphParser.RULE_contractExtends);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 424;
	        this.match(RalphParser.L_PAREN);
	        this.state = 425;
	        this.expressionList();
	        this.state = 426;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implements_() {
	    let localctx = new ImplementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, RalphParser.RULE_implements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(RalphParser.IMPLEMENTS);
	        this.state = 429;
	        this.match(RalphParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stdAnnotation() {
	    let localctx = new StdAnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, RalphParser.RULE_stdAnnotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(RalphParser.STDANNOTATION);
	        this.state = 432;
	        this.match(RalphParser.L_PAREN);
	        this.state = 433;
	        this.expressionList();
	        this.state = 434;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interface_() {
	    let localctx = new InterfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, RalphParser.RULE_interface);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 436;
	            this.stdAnnotation();
	        }

	        this.state = 439;
	        this.match(RalphParser.INTERFACE);
	        this.state = 440;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 443;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 441;
	            this.match(RalphParser.EXTENDS);
	            this.state = 442;
	            this.match(RalphParser.IDENTIFIER);
	        }

	        this.state = 445;
	        this.typeStructBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, RalphParser.RULE_event);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(RalphParser.EVENT);
	        this.state = 448;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 449;
	        this.match(RalphParser.L_PAREN);
	        this.state = 450;
	        this.paramList();
	        this.state = 451;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emit() {
	    let localctx = new EmitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, RalphParser.RULE_emit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this.match(RalphParser.EMIT);
	        this.state = 454;
	        this.match(RalphParser.IDENTIFIER);
	        this.state = 455;
	        this.match(RalphParser.L_PAREN);
	        this.state = 456;
	        this.expressionList();
	        this.state = 457;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, RalphParser.RULE_annotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.match(RalphParser.ATUSING);
	        this.state = 460;
	        this.match(RalphParser.L_PAREN);
	        this.state = 461;
	        this.expressionList();
	        this.state = 462;
	        this.match(RalphParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, RalphParser.RULE_block);
	    var _la = 0;
	    try {
	        this.state = 473;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 464;
	            this.match(RalphParser.L_CURLY);
	            this.state = 468;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2159624) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 65605) !== 0) || ((((_la - 73)) & ~0x1f) === 0 && ((1 << (_la - 73)) & 140560381) !== 0)) {
	                this.state = 465;
	                this.statement();
	                this.state = 470;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 471;
	            this.match(RalphParser.R_CURLY);
	            break;
	        case 3:
	        case 10:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 21:
	        case 35:
	        case 37:
	        case 41:
	        case 51:
	        case 73:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 87:
	        case 88:
	        case 94:
	        case 95:
	        case 100:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 472;
	            this.statement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, RalphParser.RULE_statement);
	    try {
	        this.state = 479;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 475;
	            this.simpleStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 476;
	            this.ifStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 477;
	            this.whileStmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 478;
	            this.forStmt();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStmt() {
	    let localctx = new SimpleStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, RalphParser.RULE_simpleStmt);
	    try {
	        this.state = 486;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 100:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481;
	            this.emptyStmt();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 482;
	            this.returnStmt();
	            break;
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 483;
	            this.varDecl();
	            break;
	        case 10:
	        case 35:
	        case 37:
	        case 41:
	        case 51:
	        case 73:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 87:
	        case 88:
	        case 94:
	        case 95:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 484;
	            this.expression(0);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 485;
	            this.emit();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyStmt() {
	    let localctx = new EmptyStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, RalphParser.RULE_emptyStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.eos();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStmt() {
	    let localctx = new ReturnStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, RalphParser.RULE_returnStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
	        this.match(RalphParser.RETURN);
	        this.state = 491;
	        this.expressionList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, RalphParser.RULE_ifStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this.match(RalphParser.IF);
	        this.state = 494;
	        this.match(RalphParser.L_PAREN);
	        this.state = 495;
	        this.expression(0);
	        this.state = 496;
	        this.match(RalphParser.R_PAREN);
	        this.state = 497;
	        this.block();
	        this.state = 499;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        if(la_===1) {
	            this.state = 498;
	            this.elseStmt();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStmt() {
	    let localctx = new ElseStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, RalphParser.RULE_elseStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 501;
	        this.match(RalphParser.ELSE);
	        this.state = 504;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 502;
	            this.block();
	            break;

	        case 2:
	            this.state = 503;
	            this.ifStmt();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, RalphParser.RULE_whileStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(RalphParser.WHILE);
	        this.state = 507;
	        this.match(RalphParser.L_PAREN);
	        this.state = 509;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 65605) !== 0) || ((((_la - 73)) & ~0x1f) === 0 && ((1 << (_la - 73)) & 6342653) !== 0)) {
	            this.state = 508;
	            this.expression(0);
	        }

	        this.state = 511;
	        this.match(RalphParser.R_PAREN);
	        this.state = 512;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStmt() {
	    let localctx = new ForStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, RalphParser.RULE_forStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 514;
	        this.match(RalphParser.FOR);
	        this.state = 515;
	        this.match(RalphParser.L_PAREN);
	        this.state = 516;
	        this.match(RalphParser.LET);
	        this.state = 517;
	        this.match(RalphParser.MUT);
	        this.state = 518;
	        this.varName();
	        this.state = 519;
	        this.match(RalphParser.ASSIGN);
	        this.state = 520;
	        this.expression(0);
	        this.state = 521;
	        this.match(RalphParser.SEMI);
	        this.state = 522;
	        this.expression(0);
	        this.state = 523;
	        this.match(RalphParser.SEMI);
	        this.state = 524;
	        this.expression(0);
	        this.state = 525;
	        this.match(RalphParser.R_PAREN);
	        this.state = 526;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eos() {
	    let localctx = new EosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, RalphParser.RULE_eos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        this.match(RalphParser.EOS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RalphParser.EOF = antlr4.Token.EOF;
RalphParser.FN = 1;
RalphParser.PUB = 2;
RalphParser.RETURN = 3;
RalphParser.IMPORT = 4;
RalphParser.INTERFACE = 5;
RalphParser.ENUM = 6;
RalphParser.TXSCRIPT = 7;
RalphParser.CONTRACT = 8;
RalphParser.ASSETSCRIPT = 9;
RalphParser.IF = 10;
RalphParser.ELSE = 11;
RalphParser.WHILE = 12;
RalphParser.FOR = 13;
RalphParser.LET = 14;
RalphParser.CONST = 15;
RalphParser.MUT = 16;
RalphParser.EXTENDS = 17;
RalphParser.ABSTRACT = 18;
RalphParser.IMPLEMENTS = 19;
RalphParser.EVENT = 20;
RalphParser.EMIT = 21;
RalphParser.ATUSING = 22;
RalphParser.USING = 23;
RalphParser.AT = 24;
RalphParser.BOOL = 25;
RalphParser.I256 = 26;
RalphParser.U256 = 27;
RalphParser.BYTE = 28;
RalphParser.BYTEVEC = 29;
RalphParser.ADDRESS = 30;
RalphParser.STDANNOTATION = 31;
RalphParser.ATUNUSED = 32;
RalphParser.UNUSED = 33;
RalphParser.R_ARROW = 34;
RalphParser.IDENTIFIER = 35;
RalphParser.IMPORT_PATH = 36;
RalphParser.L_PAREN = 37;
RalphParser.R_PAREN = 38;
RalphParser.L_CURLY = 39;
RalphParser.R_CURLY = 40;
RalphParser.L_BRACKET = 41;
RalphParser.R_BRACKET = 42;
RalphParser.ASSIGN = 43;
RalphParser.COMMA = 44;
RalphParser.SEMI = 45;
RalphParser.COLON = 46;
RalphParser.DOT = 47;
RalphParser.DOUBT = 48;
RalphParser.CONCAT = 49;
RalphParser.ADD = 50;
RalphParser.SUB = 51;
RalphParser.MUL = 52;
RalphParser.DIV = 53;
RalphParser.MOD = 54;
RalphParser.EXP = 55;
RalphParser.MODEXP = 56;
RalphParser.MODADD = 57;
RalphParser.MODSUB = 58;
RalphParser.MODMUL = 59;
RalphParser.SHL = 60;
RalphParser.SHR = 61;
RalphParser.BITAND = 62;
RalphParser.XOR = 63;
RalphParser.BITOR = 64;
RalphParser.EQ = 65;
RalphParser.NQ = 66;
RalphParser.LT = 67;
RalphParser.LE = 68;
RalphParser.GT = 69;
RalphParser.GE = 70;
RalphParser.AND = 71;
RalphParser.OR = 72;
RalphParser.NOT = 73;
RalphParser.ALPH = 74;
RalphParser.ALPH_TOKEN = 75;
RalphParser.ADDRESS_LIT = 76;
RalphParser.ALPH_LIT = 77;
RalphParser.BOOL_LIT = 78;
RalphParser.BYTEVEC_LIT = 79;
RalphParser.DECIMAL_LIT = 80;
RalphParser.BINARY_LIT = 81;
RalphParser.OCTAL_LIT = 82;
RalphParser.HEX_LIT = 83;
RalphParser.FLOAT_LIT = 84;
RalphParser.DECIMAL_FLOAT_LIT = 85;
RalphParser.HEX_FLOAT_LIT = 86;
RalphParser.IMAGINARY_LIT = 87;
RalphParser.RUNE_LIT = 88;
RalphParser.BYTE_VALUE = 89;
RalphParser.OCTAL_BYTE_VALUE = 90;
RalphParser.HEX_BYTE_VALUE = 91;
RalphParser.LITTLE_U_VALUE = 92;
RalphParser.BIG_U_VALUE = 93;
RalphParser.RAW_STRING_LIT = 94;
RalphParser.INTERPRETED_STRING_LIT = 95;
RalphParser.WS = 96;
RalphParser.COMMENT = 97;
RalphParser.LINE_COMMENT = 98;
RalphParser.TERMINATOR = 99;
RalphParser.EOS = 100;

RalphParser.RULE_sourceFile = 0;
RalphParser.RULE_identifierList = 1;
RalphParser.RULE_varDeclSingle = 2;
RalphParser.RULE_varDeclMulti = 3;
RalphParser.RULE_varDecl = 4;
RalphParser.RULE_varName = 5;
RalphParser.RULE_expression = 6;
RalphParser.RULE_expressionList = 7;
RalphParser.RULE_callChain = 8;
RalphParser.RULE_methodCall = 9;
RalphParser.RULE_apsPerAddress = 10;
RalphParser.RULE_apsTokenPart = 11;
RalphParser.RULE_aps = 12;
RalphParser.RULE_primaryExpr = 13;
RalphParser.RULE_primitiveType = 14;
RalphParser.RULE_arrayType = 15;
RalphParser.RULE_arrayExpr = 16;
RalphParser.RULE_typeName = 17;
RalphParser.RULE_result = 18;
RalphParser.RULE_param = 19;
RalphParser.RULE_paramList = 20;
RalphParser.RULE_methodDecl = 21;
RalphParser.RULE_basicLit = 22;
RalphParser.RULE_integer = 23;
RalphParser.RULE_string_ = 24;
RalphParser.RULE_varNameAssign = 25;
RalphParser.RULE_enum = 26;
RalphParser.RULE_typeStructBody = 27;
RalphParser.RULE_imports = 28;
RalphParser.RULE_txScript = 29;
RalphParser.RULE_assetScript = 30;
RalphParser.RULE_contract = 31;
RalphParser.RULE_extends = 32;
RalphParser.RULE_contractExtends = 33;
RalphParser.RULE_implements = 34;
RalphParser.RULE_stdAnnotation = 35;
RalphParser.RULE_interface = 36;
RalphParser.RULE_event = 37;
RalphParser.RULE_emit = 38;
RalphParser.RULE_annotation = 39;
RalphParser.RULE_block = 40;
RalphParser.RULE_statement = 41;
RalphParser.RULE_simpleStmt = 42;
RalphParser.RULE_emptyStmt = 43;
RalphParser.RULE_returnStmt = 44;
RalphParser.RULE_ifStmt = 45;
RalphParser.RULE_elseStmt = 46;
RalphParser.RULE_whileStmt = 47;
RalphParser.RULE_forStmt = 48;
RalphParser.RULE_eos = 49;

class SourceFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_sourceFile;
    }

	imports() {
	    return this.getTypedRuleContext(ImportsContext,0);
	};

	EOF() {
	    return this.getToken(RalphParser.EOF, 0);
	};

	txScript = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TxScriptContext);
	    } else {
	        return this.getTypedRuleContext(TxScriptContext,i);
	    }
	};

	contract = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContractContext);
	    } else {
	        return this.getTypedRuleContext(ContractContext,i);
	    }
	};

	interface_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceContext,i);
	    }
	};

	assetScript = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssetScriptContext);
	    } else {
	        return this.getTypedRuleContext(AssetScriptContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterSourceFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitSourceFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitSourceFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_identifierList;
    }

	varName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarNameContext);
	    } else {
	        return this.getTypedRuleContext(VarNameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterIdentifierList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitIdentifierList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitIdentifierList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclSingleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_varDeclSingle;
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	ASSIGN() {
	    return this.getToken(RalphParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CONST() {
	    return this.getToken(RalphParser.CONST, 0);
	};

	LET() {
	    return this.getToken(RalphParser.LET, 0);
	};

	MUT() {
	    return this.getToken(RalphParser.MUT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterVarDeclSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitVarDeclSingle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitVarDeclSingle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclMultiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_varDeclMulti;
    }

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	identifierList() {
	    return this.getTypedRuleContext(IdentifierListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	ASSIGN() {
	    return this.getToken(RalphParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CONST() {
	    return this.getToken(RalphParser.CONST, 0);
	};

	LET() {
	    return this.getToken(RalphParser.LET, 0);
	};

	MUT() {
	    return this.getToken(RalphParser.MUT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterVarDeclMulti(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitVarDeclMulti(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitVarDeclMulti(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_varDecl;
    }

	varDeclSingle() {
	    return this.getTypedRuleContext(VarDeclSingleContext,0);
	};

	varDeclMulti() {
	    return this.getTypedRuleContext(VarDeclMultiContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitVarDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitVarDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_varName;
    }

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterVarName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitVarName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitVarName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_expression;
    }

	primaryExpr() {
	    return this.getTypedRuleContext(PrimaryExprContext,0);
	};

	callChain() {
	    return this.getTypedRuleContext(CallChainContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	SUB() {
	    return this.getToken(RalphParser.SUB, 0);
	};

	NOT() {
	    return this.getToken(RalphParser.NOT, 0);
	};

	CONCAT() {
	    return this.getToken(RalphParser.CONCAT, 0);
	};

	ADD() {
	    return this.getToken(RalphParser.ADD, 0);
	};

	MUL() {
	    return this.getToken(RalphParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(RalphParser.DIV, 0);
	};

	EXP() {
	    return this.getToken(RalphParser.EXP, 0);
	};

	MOD() {
	    return this.getToken(RalphParser.MOD, 0);
	};

	MODADD() {
	    return this.getToken(RalphParser.MODADD, 0);
	};

	MODSUB() {
	    return this.getToken(RalphParser.MODSUB, 0);
	};

	MODMUL() {
	    return this.getToken(RalphParser.MODMUL, 0);
	};

	MODEXP() {
	    return this.getToken(RalphParser.MODEXP, 0);
	};

	SHL() {
	    return this.getToken(RalphParser.SHL, 0);
	};

	SHR() {
	    return this.getToken(RalphParser.SHR, 0);
	};

	BITAND() {
	    return this.getToken(RalphParser.BITAND, 0);
	};

	XOR() {
	    return this.getToken(RalphParser.XOR, 0);
	};

	BITOR() {
	    return this.getToken(RalphParser.BITOR, 0);
	};

	EQ() {
	    return this.getToken(RalphParser.EQ, 0);
	};

	NQ() {
	    return this.getToken(RalphParser.NQ, 0);
	};

	LT() {
	    return this.getToken(RalphParser.LT, 0);
	};

	LE() {
	    return this.getToken(RalphParser.LE, 0);
	};

	GT() {
	    return this.getToken(RalphParser.GT, 0);
	};

	GE() {
	    return this.getToken(RalphParser.GE, 0);
	};

	AND() {
	    return this.getToken(RalphParser.AND, 0);
	};

	OR() {
	    return this.getToken(RalphParser.OR, 0);
	};

	ASSIGN() {
	    return this.getToken(RalphParser.ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallChainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_callChain;
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	methodCall() {
	    return this.getTypedRuleContext(MethodCallContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.DOT);
	    } else {
	        return this.getToken(RalphParser.DOT, i);
	    }
	};


	callChain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallChainContext);
	    } else {
	        return this.getTypedRuleContext(CallChainContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterCallChain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitCallChain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitCallChain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_methodCall;
    }

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	aps() {
	    return this.getTypedRuleContext(ApsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterMethodCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitMethodCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitMethodCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ApsPerAddressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_apsPerAddress;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	R_ARROW() {
	    return this.getToken(RalphParser.R_ARROW, 0);
	};

	apsTokenPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ApsTokenPartContext);
	    } else {
	        return this.getTypedRuleContext(ApsTokenPartContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterApsPerAddress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitApsPerAddress(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitApsPerAddress(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ApsTokenPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_apsTokenPart;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COLON() {
	    return this.getToken(RalphParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterApsTokenPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitApsTokenPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitApsTokenPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ApsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_aps;
    }

	L_CURLY() {
	    return this.getToken(RalphParser.L_CURLY, 0);
	};

	apsPerAddress = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ApsPerAddressContext);
	    } else {
	        return this.getTypedRuleContext(ApsPerAddressContext,i);
	    }
	};

	R_CURLY() {
	    return this.getToken(RalphParser.R_CURLY, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.SEMI);
	    } else {
	        return this.getToken(RalphParser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterAps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitAps(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitAps(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_primaryExpr;
    }

	basicLit() {
	    return this.getTypedRuleContext(BasicLitContext,0);
	};

	arrayExpr() {
	    return this.getTypedRuleContext(ArrayExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterPrimaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitPrimaryExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitPrimaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimitiveTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_primitiveType;
    }

	BOOL() {
	    return this.getToken(RalphParser.BOOL, 0);
	};

	I256() {
	    return this.getToken(RalphParser.I256, 0);
	};

	BYTE() {
	    return this.getToken(RalphParser.BYTE, 0);
	};

	U256() {
	    return this.getToken(RalphParser.U256, 0);
	};

	BYTEVEC() {
	    return this.getToken(RalphParser.BYTEVEC, 0);
	};

	ADDRESS() {
	    return this.getToken(RalphParser.ADDRESS, 0);
	};

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterPrimitiveType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitPrimitiveType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitPrimitiveType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_arrayType;
    }

	L_BRACKET() {
	    return this.getToken(RalphParser.L_BRACKET, 0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	SEMI() {
	    return this.getToken(RalphParser.SEMI, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	R_BRACKET() {
	    return this.getToken(RalphParser.R_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitArrayType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitArrayType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_arrayExpr;
    }

	L_BRACKET() {
	    return this.getToken(RalphParser.L_BRACKET, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	R_BRACKET() {
	    return this.getToken(RalphParser.R_BRACKET, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterArrayExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitArrayExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitArrayExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_typeName;
    }

	primitiveType() {
	    return this.getTypedRuleContext(PrimitiveTypeContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterTypeName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitTypeName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitTypeName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ResultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_result;
    }

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	typeName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeNameContext);
	    } else {
	        return this.getTypedRuleContext(TypeNameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterResult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitResult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitResult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_param;
    }

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	COLON() {
	    return this.getToken(RalphParser.COLON, 0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	ATUNUSED() {
	    return this.getToken(RalphParser.ATUNUSED, 0);
	};

	MUT() {
	    return this.getToken(RalphParser.MUT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_paramList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_methodDecl;
    }

	FN() {
	    return this.getToken(RalphParser.FN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
	};

	PUB() {
	    return this.getToken(RalphParser.PUB, 0);
	};

	R_ARROW() {
	    return this.getToken(RalphParser.R_ARROW, 0);
	};

	result() {
	    return this.getTypedRuleContext(ResultContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterMethodDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitMethodDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitMethodDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BasicLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_basicLit;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	ADDRESS_LIT() {
	    return this.getToken(RalphParser.ADDRESS_LIT, 0);
	};

	ALPH_LIT() {
	    return this.getToken(RalphParser.ALPH_LIT, 0);
	};

	BOOL_LIT() {
	    return this.getToken(RalphParser.BOOL_LIT, 0);
	};

	ALPH_TOKEN() {
	    return this.getToken(RalphParser.ALPH_TOKEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterBasicLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitBasicLit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitBasicLit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_integer;
    }

	DECIMAL_LIT() {
	    return this.getToken(RalphParser.DECIMAL_LIT, 0);
	};

	BINARY_LIT() {
	    return this.getToken(RalphParser.BINARY_LIT, 0);
	};

	OCTAL_LIT() {
	    return this.getToken(RalphParser.OCTAL_LIT, 0);
	};

	HEX_LIT() {
	    return this.getToken(RalphParser.HEX_LIT, 0);
	};

	IMAGINARY_LIT() {
	    return this.getToken(RalphParser.IMAGINARY_LIT, 0);
	};

	RUNE_LIT() {
	    return this.getToken(RalphParser.RUNE_LIT, 0);
	};

	BYTEVEC_LIT() {
	    return this.getToken(RalphParser.BYTEVEC_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitInteger(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitInteger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_string_;
    }

	RAW_STRING_LIT() {
	    return this.getToken(RalphParser.RAW_STRING_LIT, 0);
	};

	INTERPRETED_STRING_LIT() {
	    return this.getToken(RalphParser.INTERPRETED_STRING_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitString_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitString_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarNameAssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_varNameAssign;
    }

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	ASSIGN() {
	    return this.getToken(RalphParser.ASSIGN, 0);
	};

	basicLit() {
	    return this.getTypedRuleContext(BasicLitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterVarNameAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitVarNameAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitVarNameAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EnumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_enum;
    }

	ENUM() {
	    return this.getToken(RalphParser.ENUM, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_CURLY() {
	    return this.getToken(RalphParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(RalphParser.R_CURLY, 0);
	};

	varNameAssign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarNameAssignContext);
	    } else {
	        return this.getTypedRuleContext(VarNameAssignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterEnum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitEnum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitEnum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeStructBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_typeStructBody;
    }

	L_CURLY() {
	    return this.getToken(RalphParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(RalphParser.R_CURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	event = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventContext);
	    } else {
	        return this.getTypedRuleContext(EventContext,i);
	    }
	};

	methodDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MethodDeclContext);
	    } else {
	        return this.getTypedRuleContext(MethodDeclContext,i);
	    }
	};

	enum_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumContext);
	    } else {
	        return this.getTypedRuleContext(EnumContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterTypeStructBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitTypeStructBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitTypeStructBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_imports;
    }

	IMPORT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.IMPORT);
	    } else {
	        return this.getToken(RalphParser.IMPORT, i);
	    }
	};


	IMPORT_PATH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.IMPORT_PATH);
	    } else {
	        return this.getToken(RalphParser.IMPORT_PATH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterImports(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitImports(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitImports(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TxScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_txScript;
    }

	TXSCRIPT() {
	    return this.getToken(RalphParser.TXSCRIPT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	typeStructBody() {
	    return this.getTypedRuleContext(TypeStructBodyContext,0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterTxScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitTxScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitTxScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssetScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_assetScript;
    }

	ASSETSCRIPT() {
	    return this.getToken(RalphParser.ASSETSCRIPT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	typeStructBody() {
	    return this.getTypedRuleContext(TypeStructBodyContext,0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterAssetScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitAssetScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitAssetScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContractContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_contract;
    }

	CONTRACT() {
	    return this.getToken(RalphParser.CONTRACT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	typeStructBody() {
	    return this.getTypedRuleContext(TypeStructBodyContext,0);
	};

	stdAnnotation() {
	    return this.getTypedRuleContext(StdAnnotationContext,0);
	};

	ABSTRACT() {
	    return this.getToken(RalphParser.ABSTRACT, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	extends_() {
	    return this.getTypedRuleContext(ExtendsContext,0);
	};

	implements_() {
	    return this.getTypedRuleContext(ImplementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterContract(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitContract(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitContract(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExtendsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_extends;
    }

	EXTENDS() {
	    return this.getToken(RalphParser.EXTENDS, 0);
	};

	contractExtends = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContractExtendsContext);
	    } else {
	        return this.getTypedRuleContext(ContractExtendsContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.COMMA);
	    } else {
	        return this.getToken(RalphParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterExtends(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitExtends(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitExtends(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContractExtendsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_contractExtends;
    }

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterContractExtends(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitContractExtends(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitContractExtends(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_implements;
    }

	IMPLEMENTS() {
	    return this.getToken(RalphParser.IMPLEMENTS, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterImplements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitImplements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitImplements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StdAnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_stdAnnotation;
    }

	STDANNOTATION() {
	    return this.getToken(RalphParser.STDANNOTATION, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterStdAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitStdAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitStdAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InterfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_interface;
    }

	INTERFACE() {
	    return this.getToken(RalphParser.INTERFACE, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.IDENTIFIER);
	    } else {
	        return this.getToken(RalphParser.IDENTIFIER, i);
	    }
	};


	typeStructBody() {
	    return this.getTypedRuleContext(TypeStructBodyContext,0);
	};

	stdAnnotation() {
	    return this.getTypedRuleContext(StdAnnotationContext,0);
	};

	EXTENDS() {
	    return this.getToken(RalphParser.EXTENDS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterInterface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitInterface(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitInterface(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_event;
    }

	EVENT() {
	    return this.getToken(RalphParser.EVENT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitEvent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitEvent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_emit;
    }

	EMIT() {
	    return this.getToken(RalphParser.EMIT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(RalphParser.IDENTIFIER, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterEmit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitEmit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitEmit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_annotation;
    }

	ATUSING() {
	    return this.getToken(RalphParser.ATUSING, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_block;
    }

	L_CURLY() {
	    return this.getToken(RalphParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(RalphParser.R_CURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_statement;
    }

	simpleStmt() {
	    return this.getTypedRuleContext(SimpleStmtContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	forStmt() {
	    return this.getTypedRuleContext(ForStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_simpleStmt;
    }

	emptyStmt() {
	    return this.getTypedRuleContext(EmptyStmtContext,0);
	};

	returnStmt() {
	    return this.getTypedRuleContext(ReturnStmtContext,0);
	};

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	emit() {
	    return this.getTypedRuleContext(EmitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterSimpleStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitSimpleStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitSimpleStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_emptyStmt;
    }

	eos() {
	    return this.getTypedRuleContext(EosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterEmptyStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitEmptyStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitEmptyStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_returnStmt;
    }

	RETURN() {
	    return this.getToken(RalphParser.RETURN, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterReturnStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitReturnStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitReturnStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_ifStmt;
    }

	IF() {
	    return this.getToken(RalphParser.IF, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	elseStmt() {
	    return this.getTypedRuleContext(ElseStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitIfStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitIfStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_elseStmt;
    }

	ELSE() {
	    return this.getToken(RalphParser.ELSE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterElseStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitElseStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitElseStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_whileStmt;
    }

	WHILE() {
	    return this.getToken(RalphParser.WHILE, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitWhileStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitWhileStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_forStmt;
    }

	FOR() {
	    return this.getToken(RalphParser.FOR, 0);
	};

	L_PAREN() {
	    return this.getToken(RalphParser.L_PAREN, 0);
	};

	LET() {
	    return this.getToken(RalphParser.LET, 0);
	};

	MUT() {
	    return this.getToken(RalphParser.MUT, 0);
	};

	varName() {
	    return this.getTypedRuleContext(VarNameContext,0);
	};

	ASSIGN() {
	    return this.getToken(RalphParser.ASSIGN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RalphParser.SEMI);
	    } else {
	        return this.getToken(RalphParser.SEMI, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(RalphParser.R_PAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterForStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitForStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitForStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RalphParser.RULE_eos;
    }

	EOS() {
	    return this.getToken(RalphParser.EOS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.enterEos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RalphParserListener ) {
	        listener.exitEos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RalphParserVisitor ) {
	        return visitor.visitEos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RalphParser.SourceFileContext = SourceFileContext; 
RalphParser.IdentifierListContext = IdentifierListContext; 
RalphParser.VarDeclSingleContext = VarDeclSingleContext; 
RalphParser.VarDeclMultiContext = VarDeclMultiContext; 
RalphParser.VarDeclContext = VarDeclContext; 
RalphParser.VarNameContext = VarNameContext; 
RalphParser.ExpressionContext = ExpressionContext; 
RalphParser.ExpressionListContext = ExpressionListContext; 
RalphParser.CallChainContext = CallChainContext; 
RalphParser.MethodCallContext = MethodCallContext; 
RalphParser.ApsPerAddressContext = ApsPerAddressContext; 
RalphParser.ApsTokenPartContext = ApsTokenPartContext; 
RalphParser.ApsContext = ApsContext; 
RalphParser.PrimaryExprContext = PrimaryExprContext; 
RalphParser.PrimitiveTypeContext = PrimitiveTypeContext; 
RalphParser.ArrayTypeContext = ArrayTypeContext; 
RalphParser.ArrayExprContext = ArrayExprContext; 
RalphParser.TypeNameContext = TypeNameContext; 
RalphParser.ResultContext = ResultContext; 
RalphParser.ParamContext = ParamContext; 
RalphParser.ParamListContext = ParamListContext; 
RalphParser.MethodDeclContext = MethodDeclContext; 
RalphParser.BasicLitContext = BasicLitContext; 
RalphParser.IntegerContext = IntegerContext; 
RalphParser.String_Context = String_Context; 
RalphParser.VarNameAssignContext = VarNameAssignContext; 
RalphParser.EnumContext = EnumContext; 
RalphParser.TypeStructBodyContext = TypeStructBodyContext; 
RalphParser.ImportsContext = ImportsContext; 
RalphParser.TxScriptContext = TxScriptContext; 
RalphParser.AssetScriptContext = AssetScriptContext; 
RalphParser.ContractContext = ContractContext; 
RalphParser.ExtendsContext = ExtendsContext; 
RalphParser.ContractExtendsContext = ContractExtendsContext; 
RalphParser.ImplementsContext = ImplementsContext; 
RalphParser.StdAnnotationContext = StdAnnotationContext; 
RalphParser.InterfaceContext = InterfaceContext; 
RalphParser.EventContext = EventContext; 
RalphParser.EmitContext = EmitContext; 
RalphParser.AnnotationContext = AnnotationContext; 
RalphParser.BlockContext = BlockContext; 
RalphParser.StatementContext = StatementContext; 
RalphParser.SimpleStmtContext = SimpleStmtContext; 
RalphParser.EmptyStmtContext = EmptyStmtContext; 
RalphParser.ReturnStmtContext = ReturnStmtContext; 
RalphParser.IfStmtContext = IfStmtContext; 
RalphParser.ElseStmtContext = ElseStmtContext; 
RalphParser.WhileStmtContext = WhileStmtContext; 
RalphParser.ForStmtContext = ForStmtContext; 
RalphParser.EosContext = EosContext; 
