package tabletopstatistics;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Publisher extends User{

    private String publisherName;
    private List<BoardGames> games;
}
