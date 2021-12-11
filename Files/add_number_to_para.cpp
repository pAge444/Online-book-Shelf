#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    string line;
    ifstream fio("abcd.txt");
    ofstream iio("text2.txt");
    if (iio && fio)
        cout << "found" << '\n';
    int count = 1;
    while (!fio.eof())
    {
        getline(fio, line);

        if (line[0] == '<' && line[1] == 'P')
        {
            string newline = "<p id='" + to_string(count) + "' ";
            for (int i = 2; i < line.size(); i++)
                newline += line[i];

            line = newline;

            count++;
        }

        // cout << line << endl;
        iio << line;
        iio << endl;
    }
    fio.close();
    iio.close();
    return 0;
}