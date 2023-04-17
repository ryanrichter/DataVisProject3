from bs4 import BeautifulSoup

# Importing the HTTP library
import requests as req

import pandas as pd

episodeDoc = """ 
SEASON 1
<li><a href="/wiki/Transcript_of_Pilot" title="Transcript of Pilot" season="1">Transcript of Pilot</a></li>
<li><a href="/wiki/Transcript_of_Top_Banana" title="Transcript of Top Banana" season="1">Transcript of Top Banana</a></li>
<li><a href="/wiki/Transcript_of_Bringing_Up_Buster" title="Transcript of Bringing Up Buster" season="1">Transcript of Bringing Up Buster</a></li>
<li><a href="/wiki/Transcript_of_Key_Decisions" title="Transcript of Key Decisions" season="1">Transcript of Key Decisions</a></li>
<li><a href="/wiki/Transcript_of_Charity_Drive" title="Transcript of Charity Drive" season="1">Transcript of Charity Drive</a></li>
<li><a href="/wiki/Transcript_of_Visiting_Ours" title="Transcript of Visiting Ours" season="1">Transcript of Visiting Ours</a></li>
<li><a href="/wiki/Transcript_of_In_God_We_Trust" title="Transcript of In God We Trust" season="1">Transcript of In God We Trust</a></li>
<li><a href="/wiki/Transcript_of_My_Mother,_the_Car" title="Transcript of My Mother, the Car" season="1">Transcript of My Mother, the Car</a></li>
<li><a href="/wiki/Transcript_of_Storming_the_Castle" title="Transcript of Storming the Castle" season="1">Transcript of Storming the Castle</a></li>
<li><a href="/wiki/Transcript_of_Pier_Pressure" title="Transcript of Pier Pressure" season="1">Transcript of Pier Pressure</a></li>
<li><a href="/wiki/Transcript_of_Public_Relations" title="Transcript of Public Relations" season="1">Transcript of Public Relations</a></li>
<li><a href="/wiki/Transcript_of_Marta_Complex" title="Transcript of Marta Complex" season="1">Transcript of Marta Complex</a></li>
<li><a href="/wiki/Transcript_of_Beef_Consomm%C3%A9" title="Transcript of Beef Consommé" season="1">Transcript of Beef Consommé</a></li>
<li><a href="/wiki/Transcript_of_Shock_and_Aww" title="Transcript of Shock and Aww" season="1">Transcript of Shock and Aww</a></li>
<li><a href="/wiki/Transcript_of_Staff_Infection" title="Transcript of Staff Infection" season="1">Transcript of Staff Infection</a></li>
<li><a href="/wiki/Transcript_of_Altar_Egos" title="Transcript of Altar Egos" season="1">Transcript of Altar Egos</a></li>
<li><a href="/wiki/Transcript_of_Justice_Is_Blind" title="Transcript of Justice Is Blind" season="1">Transcript of Justice Is Blind</a></li>
<li><a href="/wiki/Transcript_of_Missing_Kitty" title="Transcript of Missing Kitty" season="1">Transcript of Missing Kitty</a></li>
<li><a href="/wiki/Transcript_of_Best_Man_for_the_Gob" title="Transcript of Best Man for the Gob" season="1">Transcript of Best Man for the Gob</a></li>
<li><a href="/wiki/Transcript_of_Whistler%27s_Mother" title="Transcript of Whistler&#39;s Mother" season="1">Transcript of Whistler's Mother</a></li>
<li><a href="/wiki/Transcript_of_Not_Without_My_Daughter" title="Transcript of Not Without My Daughter" season="1">Transcript of Not Without My Daughter</a></li>
<li><a href="/wiki/Transcript_of_Let_%27Em_Eat_Cake" title="Transcript of Let &#39;Em Eat Cake" season="1">Transcript of Let 'Em Eat Cake</a></li></ol>

SEASON 2
<li><a href="/wiki/Transcript_of_The_One_Where_They_Build_a_House" title="Transcript of The One Where They Build a House" season="2">Transcript of The One Where They Build a House</a></li>
<li><a href="/wiki/Transcript_of_%C2%A1Amigos!" title="Transcript of ¡Amigos!" season="2">Transcript of ¡Amigos!</a></li>
<li><a href="/wiki/Transcript_of_Good_Grief" title="Transcript of Good Grief" season="2">Transcript of Good Grief</a></li>
<li><a href="/wiki/Transcript_of_Sad_Sack" title="Transcript of Sad Sack" season="2">Transcript of Sad Sack</a></li>
<li><a href="/wiki/Transcript_of_Afternoon_Delight" title="Transcript of Afternoon Delight" season="2">Transcript of Afternoon Delight</a></li>
<li><a href="/wiki/Transcript_of_Switch_Hitter" title="Transcript of Switch Hitter" season="2">Transcript of Switch Hitter</a></li>
<li><a href="/wiki/Transcript_of_Queen_for_a_Day" title="Transcript of Queen for a Day" season="2">Transcript of Queen for a Day</a></li>
<li><a href="/wiki/Transcript_of_Burning_Love" title="Transcript of Burning Love" season="2">Transcript of Burning Love</a></li>
<li><a href="/wiki/Transcript_of_Ready,_Aim,_Marry_Me" title="Transcript of Ready, Aim, Marry Me" season="2">Transcript of Ready, Aim, Marry Me</a></li>
<li><a href="/wiki/Transcript_of_Out_on_a_Limb" title="Transcript of Out on a Limb" season="2">Transcript of Out on a Limb</a></li>
<li><a href="/wiki/Transcript_of_Hand_to_God" title="Transcript of Hand to God" season="2">Transcript of Hand to God</a></li>
<li><a href="/wiki/Transcript_of_Motherboy_XXX" title="Transcript of Motherboy XXX" season="2">Transcript of Motherboy XXX</a></li>
<li><a href="/wiki/Transcript_of_The_Immaculate_Election" title="Transcript of The Immaculate Election" season="2">Transcript of The Immaculate Election</a></li>
<li><a href="/wiki/Transcript_of_Sword_of_Destiny" title="Transcript of Sword of Destiny" season="2">Transcript of Sword of Destiny</a></li>
<li><a href="/wiki/Transcript_of_Meat_the_Veals" title="Transcript of Meat the Veals" season="2">Transcript of Meat the Veals</a></li>
<li><a href="/wiki/Transcript_of_Spring_Breakout" title="Transcript of Spring Breakout" season="2">Transcript of Spring Breakout</a></li>
<li><a href="/wiki/Transcript_of_Righteous_Brothers" title="Transcript of Righteous Brothers" season="2">Transcript of Righteous Brothers</a></li></ol>

SEASON 3
<li><a href="/wiki/Transcript_of_For_British_Eyes_Only" title="Transcript of For British Eyes Only" season="3">Transcript of For British Eyes Only</a></li>
<li><a href="/wiki/Transcript_of_Forget-Me-Now" title="Transcript of Forget-Me-Now" season="3">Transcript of Forget-Me-Now</a></li>
<li><a href="/wiki/Transcript_of_Notapusy" title="Transcript of Notapusy" season="3">Transcript of Notapusy</a></li>
<li><a href="/wiki/Transcript_of_Mr._F" title="Transcript of Mr. F" season="3">Transcript of Mr. F</a></li>
<li><a href="/wiki/Transcript_of_The_Ocean_Walker" title="Transcript of The Ocean Walker" season="3">Transcript of The Ocean Walker</a></li>
<li><a href="/wiki/Transcript_of_Prison_Break-In" title="Transcript of Prison Break-In" season="3">Transcript of Prison Break-In</a></li>
<li><a href="/wiki/Transcript_of_Making_a_Stand" title="Transcript of Making a Stand" season="3">Transcript of Making a Stand</a></li>
<li><a href="/wiki/Transcript_of_S.O.B.s" title="Transcript of S.O.B.s" season="3">Transcript of S.O.B.s</a></li>
<li><a href="/wiki/Transcript_of_Fakin%27_It" title="Transcript of Fakin&#39; It" season="3">Transcript of Fakin' It</a></li>
<li><a href="/wiki/Transcript_of_Family_Ties" title="Transcript of Family Ties" season="3">Transcript of Family Ties</a></li>
<li><a href="/wiki/Transcript_of_Exit_Strategy" title="Transcript of Exit Strategy" season="3">Transcript of Exit Strategy</a></li>
<li><a href="/wiki/Transcript_of_Development_Arrested" title="Transcript of Development Arrested" season="3">Transcript of Development Arrested</a></li></ol>

SEASON 4
<li><a href="/wiki/Transcript_of_Borderline_Personalities" title="Transcript of Borderline Personalities" season="4">Transcript of Borderline Personalities</a></li>
<li><a href="/wiki/Transcript_of_Indian_Takers" title="Transcript of Indian Takers" season="4">Transcript of Indian Takers</a></li>
<li><a href="/wiki/Transcript_of_The_B._Team" title="Transcript of The B. Team" season="4">Transcript of The B. Team</a></li>
<li><a href="/wiki/Transcript_of_A_New_Start" title="Transcript of A New Start" season="4">Transcript of A New Start</a></li>
<li><a href="/wiki/Transcript_of_Double_Crossers" title="Transcript of Double Crossers" season="4">Transcript of Double Crossers</a></li>
<li><a href="/wiki/Transcript_of_Colony_Collapse" title="Transcript of Colony Collapse" season="4">Transcript of Colony Collapse</a></li>
<li><a href="/wiki/Transcript_of_Red_Hairing" title="Transcript of Red Hairing" season="4">Transcript of Red Hairing</a></li>
<li><a href="/wiki/Transcript_of_Smashed" title="Transcript of Smashed" season="4">Transcript of Smashed</a></li>
<li><a href="/wiki/Transcript_of_Queen_B." title="Transcript of Queen B." season="4">Transcript of Queen B.</a></li>
<li><a href="/wiki/Transcript_of_A_New_Attitude" title="Transcript of A New Attitude" season="4">Transcript of A New Attitude</a></li>
<li><a href="/wiki/Transcript_of_Se%C3%B1oritis" title="Transcript of Señoritis" season="4">Transcript of Señoritis</a></li>
<li><a href="/wiki/Transcript_of_It_Gets_Better" title="Transcript of It Gets Better" season="4">Transcript of It Gets Better</a></li>
<li><a href="/wiki/Transcript_of_Off_the_Hook" title="Transcript of Off the Hook" season="4">Transcript of Off the Hook</a></li>
<li><a href="/wiki/Transcript_of_Blockheads" title="Transcript of Blockheads" season="4">Transcript of Blockheads</a></li></ol>
"""

epSoup = BeautifulSoup(episodeDoc, 'html.parser')
epSoup.prettify()

listofUrls = []

episodeData = {'season': [],
        'episode': [],
        'url': [],
        }

completeData = {'season': [],
        'episode': [],
        'url': [],
        'character': [],
        'line': []
        }

for a in epSoup.find_all('a', href=True):
    episodeData['season'].append(a['season'])
    episodeData['episode'].append(a['title'].replace("Transcript of ",""))
    episodeData['url'].append("https://arresteddevelopment.fandom.com"+a['href'])

# run a scrape for every transcript we have
for i in range(len(episodeData['url'])):
    # Requesting for the website
    html_doc = req.get(episodeData['url'][i])

    if html_doc:
        # Creating a BeautifulSoup object and specifying the parser
        S = BeautifulSoup(html_doc.content , 'html.parser')
    
        # Using the prettify method
        # print(S.prettify())

        nonFilteredCharList = []

        nonFilteredSaid = []

        listOfBold =  S.find_all('p'); 
        for item in listOfBold:
            bold = item.find('b')
            nonFilteredCharList.append(str(bold))
            #print(bold)
            txt = item.get_text()
            said = txt.split(":")
            nonFilteredSaid.append(said[ len(said)-1].replace('’',"'").replace('”','"').replace('“','"').replace('—','-').replace('Â',''))
            #print(said[ len(said)-1])
    else:
        print("fail")

    for j in range(len(nonFilteredCharList)):
        nonFilteredCharList[j] = nonFilteredCharList[j].replace('<b>','').replace('</b>','')
        if nonFilteredCharList[j].endswith(':') and nonFilteredCharList[j] != "Starring:" and nonFilteredCharList[j] != "Guest Starring:":
            completeData['character'].append(nonFilteredCharList[j].replace(':',''))
            completeData['line'].append(nonFilteredSaid[j].replace('\n',''))
            completeData['episode'].append(episodeData['episode'][i])
            completeData['url'].append(episodeData['url'][i])
            completeData['season'].append(episodeData['season'][i])


df = pd.DataFrame(completeData)

df.to_csv(r'C:\Users\15134\Desktop\export_dataframe.csv', index=False, header=True)

print(df)