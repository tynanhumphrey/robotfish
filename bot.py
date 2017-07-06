# Twitch IRC BOT for emulators
# This Python script connects to the twitch channel provided with the credencials provided to gets the chat input in order to convert them into keypresses
# Big thanks to TwitchPlaysPokemon (http://www.twitch.tv/twitchplayspokemon) for create this idea.
# Author : Matias49 | https://github.com/matias49
# Licence : GPL v3
# For the key's hex code, check this link : http://msdn.microsoft.com/en-us/library/windows/desktop/dd375731%28v=vs.85%29.aspx
# irclib & ircbot download : http://sourceforge.net/projects/python-irclib/files/python-irclib/
import irclib
import ircbot
import time
import os
# win32api download : http://sourceforge.net/projects/pywin32/files/pywin32/Build%20218/
#import win32api
#import win32con

class Bot(ircbot.SingleServerIRCBot):
	# Initialize the bot
    def __init__(self):
	# format of this function : (self, [(IRC server, port, password)], name, comment)
        ircbot.SingleServerIRCBot.__init__(self, [("irc.twitch.tv", 6667, "oauth:tnpwdwt45wxo5zj9td2wos9zo9s366")], # key : www.twitchapps.com/tmi 
                                           "robochatfish", "IRC Bot")
    def on_welcome(self, serv, ev):
        # join the Twitch channel you want
        serv.join("#adultswim")
        print "JOINED"
    def on_pubmsg(self, serv, ev):
        # Gets the message
        message = ev.arguments()[0].lower()
	# Gets the author (ex : dentuk!~dentuk@EpiK-BE9687C2.fbx.proxad.net)
        author = ev.source()
	# gets the ! position to remove the rest
        namePosition = author.index('!')
	# save only the author
        author = author[0:namePosition]
        #print author," : ",message # print test
        if message == "left":
            print author," : ",message
            cmd = """
            osascript -e 'tell application "System Events" to keystroke "a"' 
            """
            os.system(cmd)
        if message == "right":
            print author," : ",message
            cmd = """
            osascript -e 'tell application "System Events" to keystroke "d"' 
            """
            os.system(cmd)
        if message == "up":
            print author," : ",message
            cmd = """
            osascript -e 'tell application "System Events" to keystroke "w"' 
            """
            os.system(cmd)
        if message == "right":
            print author," : ",message
            cmd = """
            osascript -e 'tell application "System Events" to keystroke "d"' 
            """
            os.system(cmd)
        
if __name__ == "__main__":
    Bot().start()
    
