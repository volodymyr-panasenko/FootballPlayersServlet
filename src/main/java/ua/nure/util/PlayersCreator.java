package ua.nure.util;

import ua.nure.entities.Player;
import ua.nure.entities.Position;

import java.util.ArrayList;
import java.util.List;

public class PlayersCreator {

    private static PlayersCreator instance = null;

    private List<Player> players = new ArrayList<>();

    private PlayersCreator() {
    }

    public static synchronized PlayersCreator getInstance() {
        if (instance == null) {
            instance = new PlayersCreator();
        }
        return instance;
    }

    public List<Player> createPlayers() {
        if (players.size() == 0) {
            Player player = new Player();
            player.setId(1);
            player.setName("Toni Kroos");
            player.setCountry("Germany");
            player.setAge(27);
            player.setCost(80);
            player.setPosition(Position.CM);
            players.add(player);

            player = new Player();
            player.setId(2);
            player.setName("Cristiano Ronaldo");
            player.setCountry("Portugal");
            player.setAge(32);
            player.setCost(110);
            player.setPosition(Position.FM);
            players.add(player);

            player = new Player();
            player.setId(3);
            player.setName("Marcelo Vieira");
            player.setCountry("Brazil");
            player.setAge(28);
            player.setCost(70);
            player.setPosition(Position.CM);
            players.add(player);
        }
        return players;
    }
}
